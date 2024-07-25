import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// chart
import { NgApexchartsModule } from "ng-apexcharts";

// Page Route
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Count To
import { CountUpModule } from 'ngx-countup';

// Bootstrap Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Component
import { IndexComponent } from './index/index.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


@NgModule({
  declarations: [
    IndexComponent,
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    NgApexchartsModule,
    BsDropdownModule.forRoot(),
    CountUpModule,
    SimplebarAngularModule,
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot(),
    SlickCarouselModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardsModule { }
