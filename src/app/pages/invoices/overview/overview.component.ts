import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators'
import { fetchData } from 'src/app/store/actions/invoice-action';
import { InvoiceState } from 'src/app/store/reducers/invoice-reducer';
import { selectData } from 'src/app/store/selectors/invoice.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

// Overview Component
export class OverviewComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  invoices: any;

  constructor(private route: ActivatedRoute, public router: Router, private store: Store<{ data: InvoiceState }>) { }

  ngOnInit(): void {

    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Invoice', active: true },
      { label: 'Invoice Overview', active: true }
    ];
    const id = this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : '24301901';

    this.store.dispatch(fetchData());
    this.store.select(selectData).subscribe(data => {
      this.invoices = data.find(item => item.invoice_no == id);
    });
  }

  // Display card number Mask
  getMaskedCardNumber(cardNumber: number | undefined): string {
    if (cardNumber) {
      const cardNumberString = cardNumber.toString();
      const last4Digits = cardNumberString.slice(-4);
      const maskedDigits = 'x'.repeat(cardNumberString.length - 4);
      const formattedNumber = (maskedDigits + last4Digits).replace(/(.{4})/g, '$1 ').trim();
      return formattedNumber;
    } else {
      return '';
    }
  }
}
