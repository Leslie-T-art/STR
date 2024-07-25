import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// bootstrap component
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollspyDirective } from 'src/app/scrollspy.directive';

// Simple bar
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Page Route
import { AdvanceUiRoutingModule } from './advance-ui-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// component
import { SweetalertsComponent } from './sweetalerts/sweetalerts.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { SwipersComponent } from './swiper/swiper.component';
import { RatingsComponent } from './ratings/ratings.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';

@NgModule({
  declarations: [
    SweetalertsComponent,
    ScrollbarComponent,
    SwipersComponent,
    RatingsComponent,
    HighlightComponent,
    ScrollspyComponent,
    ScrollspyDirective,

  ],
  imports: [
    CommonModule,
    AdvanceUiRoutingModule,
    FormsModule,
    RatingModule.forRoot(),
    ScrollToModule.forRoot(),
    SharedModule,
    ModalModule,
    BsDropdownModule.forRoot(),
    SimplebarAngularModule,
    SlickCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvanceUiModule {
}
