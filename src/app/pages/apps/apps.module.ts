import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Calendar package
import { FullCalendarModule } from '@fullcalendar/angular';

// Count To
import { CountUpModule } from 'ngx-countup';

// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// lord-icon
import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

// dropzone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

//  Drag and drop
import { DndModule } from 'ngx-drag-drop';

// chart
import { NgApexchartsModule } from "ng-apexcharts";

// Drag-Drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';

// Bootstrap Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AlertModule } from 'ngx-bootstrap/alert';

// Page Route
import { AppsRoutingModule } from './apps-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Component
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ContactsComponent } from './contacts/contacts.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { WidgetsComponent } from './widgets/widgets.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    CalendarComponent,
    ChatComponent,
    EmailComponent,
    FileManagerComponent,
    ToDoComponent,
    ContactsComponent,
    KanbanboardComponent,
    WidgetsComponent,

  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SimplebarAngularModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    FlatpickrModule.forRoot(),
    CKEditorModule,
    PaginationModule,
    NgApexchartsModule,
    ProgressbarModule,
    DragDropModule,
    MatTableModule,
    SharedModule,
    DndModule,
    CountUpModule,
    PickerModule,
    DropzoneModule,
    AlertModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DatePipe,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class AppsModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
