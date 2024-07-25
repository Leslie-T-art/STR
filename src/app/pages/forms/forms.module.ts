import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { FormRoutingModule } from './forms-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';

// bootstrap component
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//Wizard
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';

// Dropzone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Color Picker
import { ColorPickerModule } from 'ngx-color-picker';

// Auto Complate
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

// Range Slider
import { NgxSliderModule } from 'ngx-slider-v2';

// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Editer
import { NgxEditorModule } from 'ngx-editor';

// Component
import { ElementsComponent } from './elements/elements.component';
import { SelectComponent } from './select/select.component';
import { CheckboxsRadiosComponent } from './checkboxs-radios/checkboxs-radios.component';
import { PickersComponent } from './pickers/pickers.component';
import { MasksComponent } from './masks/masks.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { LayoutsComponent } from './layouts/layouts.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
};
 
@NgModule({
  declarations: [
    ElementsComponent,
    SelectComponent,
    CheckboxsRadiosComponent,
    PickersComponent,
    MasksComponent,
    AdvancedComponent,
    RangeSlidersComponent,
    ValidationComponent,
    WizardComponent,
    EditorsComponent,
    FileUploadsComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormRoutingModule,
    NgSelectModule,
    FormsModule,
    UiSwitchModule,
    TimepickerModule,
    FlatpickrModule.forRoot(),
    BsDropdownModule,
    ColorPickerModule,
    AutocompleteLibModule,
    NgxSliderModule,
    CKEditorModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CdkStepperModule,
    NgStepperModule,
    DropzoneModule,
    NgxEditorModule,
    SimplebarAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideNgxMask(),
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class FormModule { }
