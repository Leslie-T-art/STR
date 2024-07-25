import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// page Route
import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Count To
import { CountUpModule } from 'ngx-countup';

// Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// FlatPicker
import { FlatpickrModule } from 'angularx-flatpickr';

// Bootstrap Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

// Component
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    ListComponent,
    OverviewComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    CountUpModule,
    FlatpickrModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class InvoicesModule { }
