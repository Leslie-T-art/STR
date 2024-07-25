/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { filemanagerModel } from '../../../store/models/file-manager.model';
import { filerecent } from '../../../core/data/file-manager';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
  countries: filemanagerModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  startIndex: number;
  endIndex: number;
  totalRecords: number;
  status: string;
  payment: string;
  date: string;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(countries: filemanagerModel[]): filemanagerModel[] {
  return countries;
}

function matches(country: filemanagerModel, term: string, pipe: PipeTransform) {
  return country.title.toLowerCase().includes(term.toLowerCase())
    || country.icon.toLowerCase().includes(term.toLowerCase())
    || country.color.toLowerCase().includes(term.toLowerCase())
    || country.item.toLowerCase().includes(term.toLowerCase())
    || country.mb.toLowerCase().includes(term.toLowerCase())
    || country.date.toLowerCase().includes(term.toLowerCase())
    ;
}

@Injectable({ providedIn: 'root' })
export class FileManagerService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _countries$ = new BehaviorSubject<filemanagerModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  content?: any;
  products?: any;

  private _state: State = {
    page: 1,
    pageSize: 6,
    searchTerm: '',
    startIndex: 0,
    endIndex: 6,
    totalRecords: 0,
    status: '',
    payment: '',
    date: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._countries$.next(result.countries);
      this._total$.next(result.total);
    });

    this._search$.next();

    this.products = filerecent;
  }

  get countries$() { return this._countries$.asObservable(); }
  get product() { return this.products; }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  get startIndex() { return this._state.startIndex; }
  get endIndex() { return this._state.endIndex; }
  get totalRecords() { return this._state.totalRecords; }
  get status() { return this._state.status; }
  get payment() { return this._state.payment; }
  get date() { return this._state.date; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set startIndex(startIndex: number) { this._set({ startIndex }); }
  set endIndex(endIndex: number) { this._set({ endIndex }); }
  set totalRecords(totalRecords: number) { this._set({ totalRecords }); }
  set status(status: any) { this._set({ status }); }
  set payment(payment: any) { this._set({ payment }); }
  set date(date: any) { this._set({ date }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const datas = (this.product) ?? [];
    const { pageSize, page, searchTerm, status, payment, date } = this._state;

    // 1. sort
    let countries = sort(datas);

    // 2. search
    if (searchTerm) {
      countries = countries.filter(country => matches(country, searchTerm, this.pipe));
    }

    const total = countries.length;

    // 3. paginate
    this.totalRecords = countries.length;
    this._state.startIndex = (page - 1) * this.pageSize + 1;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    countries = countries.slice(this._state.startIndex - 1, this._state.endIndex);
    return of({ countries, total });
  }


}
