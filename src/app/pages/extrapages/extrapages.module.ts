import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { ExtraPagesRoutingModule } from './extrapages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Bootstrap Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Component
import { StarterComponent } from './starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermConditionsComponent } from './term-conditions/term-conditions.component';


@NgModule({
  declarations: [
    StarterComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    TimelineComponent,
    FaqsComponent,
    PricingComponent,
    PrivacyPolicyComponent,
    TermConditionsComponent,
  ],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtrapagesModule { }
