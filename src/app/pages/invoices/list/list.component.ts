import { Component, ViewChild } from '@angular/core';
import { invoicesList } from '../../../core/data/invoice-list';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteInvoice, fetchData } from 'src/app/store/actions/invoice-action';
import { selectData } from 'src/app/store/selectors/invoice.selectors';
import { InvoiceState } from 'src/app/store/reducers/invoice-reducer';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

// List Component
export class ListComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // Table data
  InvoiceList!: any;
  searchTerm!: string;
  searchResults!: [];

  invoices: any;
  deleteId: any;
  masterSelected!: boolean;

  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;

  constructor(public router: Router, private store: Store<{ data: InvoiceState }>) {
  }

  ngOnInit(): void {

    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Invoice', active: true },
      { label: 'Invoice List', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchData());
      this.store.select(selectData).subscribe(data => {
        this.invoices = data
        this.InvoiceList = data;
        this.invoices = cloneDeep(this.InvoiceList.slice(0, 10));
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)
  }

  // Page Changed
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.invoices = this.InvoiceList.slice(startItem, endItem);
  }

  // Search Data
  performSearch(): void {
    this.searchResults = this.InvoiceList.filter((item: any) => {
      return item.customer.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.email.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.createDate.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.invoice_amount.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.status.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.notes.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
    this.invoices = this.searchResults
  }

  // Sort Data
  direction: any = 'asc';
  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc'
    } else {
      this.direction = 'asc'
    }
    const sortedArray = [...this.invoices]; // Create a new array
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
    this.invoices = sortedArray;
  }

  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  // View Invoice Detail
  ViewInvoice(content: any) {
    this.router.navigate(['/invoices/overview', { id: content.invoice_no }])
  }

  // Edit invoice detail
  EditInvoice(content: any) {
    this.router.navigate(['/invoices/create', { id: content.invoice_no }])
  }

  // Delete Data
  confirmDelete() {
    this.store.dispatch(deleteInvoice({ id: this.deleteId }));
    this.deleteRecordModal?.hide();
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.masterSelected = ev.target.checked;
    this.invoices.forEach((data: any) => {
      data.isSelected = this.masterSelected;
    });
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].isSelected == true) {
        result = this.invoices[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    checkedVal.length > 0
      ? document.getElementById('remove-actions')?.classList.remove('d-none')
      : document.getElementById('remove-actions')?.classList.add('d-none');
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].isSelected == true) {
        result = this.invoices[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    checkedVal.length > 0
      ? document.getElementById('remove-actions')?.classList.remove('d-none')
      : document.getElementById('remove-actions')?.classList.add('d-none');
  }

  /**
   * Delete Model Open
   */
  removeData(id: any) {
    this.deleteId = id;
    this.deleteRecordModal?.show();
  }

  /**
   * Multiple Delete
   */
  checkedValGet: any[] = [];


  // Delete Data
  deleteData(event: any) {
    this.store.dispatch(
      deleteInvoice({ id: this.checkedValGet.toString() })
    );
    // this.alertService.showSuccessAlert(
    //   'Deleted!',
    //   'Your data has been deleted.'
    // );
    event.target.closest('tr')?.remove();
    this.masterSelected = false;
  }

}
