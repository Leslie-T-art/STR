import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { TableRoutingModule } from './table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// lord-icon
import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";

// bootstrap component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// ng-serach
import { NgPipesModule } from 'ngx-pipes';

// Component
import { BasicComponent } from './basic/basic.component';
import { GridjsComponent } from './gridjs/gridjs.component';
import { ListjsComponent } from './listjs/listjs.component';

// Sorting page
import { NgbdGridJsSortableHeader } from './gridjs/gridjs-sortable.directive';
import { NgbdListSortableHeader } from './listjs/listjs-sortable.directive';

@NgModule({
  declarations: [
    BasicComponent,
    GridjsComponent,
    ListjsComponent,
    NgbdGridJsSortableHeader,
    NgbdListSortableHeader
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    NgPipesModule,
    SimplebarAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TablesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
