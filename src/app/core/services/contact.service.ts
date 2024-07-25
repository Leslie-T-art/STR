import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactModel } from 'src/app/store/models/data.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) { }
  /***
   * Get All Invoice
   */
  fetchData(url: any) {
    return this.http.get<ContactModel[]>(url);
  }

  addData(url:any,newData: ContactModel): Observable<ContactModel[]> {
    return this.http.post<ContactModel[]>(url, newData);
  }

  updateData(url:any,updatedData: ContactModel): Observable<ContactModel[]> {
    return this.http.put<ContactModel[]>(
      url, updatedData
    );
  }

  deleteData(url:any): Observable<void> {
    return this.http.delete<void>(url);
  }
}
