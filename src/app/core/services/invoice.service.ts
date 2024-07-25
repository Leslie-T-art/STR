import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceModel } from 'src/app/store/models/data.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  constructor(private http: HttpClient) { }
  /***
   * Get All Invoice
   */
  fetchData() {
    return this.http.get<InvoiceModel[]>(`/app/invoice`);
  }

  addData(newData: InvoiceModel): Observable<InvoiceModel[]> {
    return this.http.post<InvoiceModel[]>(`/app/invoice`, newData);
  }

  updateData(updatedData: InvoiceModel): Observable<InvoiceModel[]> {
    return this.http.put<InvoiceModel[]>(
      `/app/invoice/${updatedData.invoice_no}`,
      updatedData
    );
  }

  deleteData(url:any): Observable<void> {
    return this.http.delete<void>(url);
  }
}
