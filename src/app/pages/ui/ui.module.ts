import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Page Route
import { UiRoutingModule } from './ui-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgxMasonryModule } from 'ngx-masonry';
import { SimplebarAngularModule } from 'simplebar-angular';

// bootstrap component
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Component
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { GridComponent } from './grid/grid.component';
import { ImagesComponent } from './images/images.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { ModalsComponent } from './modals/modals.component';
import { MediaComponent } from './media/media.component';
import { EmbedVideoComponent } from './embed-video/embed-video.component';
import { TypographyComponent } from './typography/typography.component';
import { ListsComponent } from './lists/lists.component';
import { LinksComponent } from './links/links.component';
import { GeneralComponent } from './general/general.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { ProgressComponent } from './progress/progress.component';
import { NotificationComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AlertsComponent,
    BadgesComponent,
    ButtonsComponent,
    ColorsComponent,
    CardsComponent,
    CarouselComponent,
    DropdownsComponent,
    GridComponent,
    ImagesComponent,
    TabsComponent,
    AccordionsComponent,
    ModalsComponent,
    MediaComponent,
    EmbedVideoComponent,
    TypographyComponent,
    ListsComponent,
    LinksComponent,
    GeneralComponent,
    UtilitiesComponent,
    OffcanvasComponent,
    PlaceholdersComponent,
    NotificationComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    AlertModule,
    NgxMasonryModule,
    CarouselModule,
    BsDropdownModule,
    TabsModule,
    AccordionModule,
    CollapseModule,
    ModalModule.forRoot(),
    PopoverModule,
    SimplebarAngularModule,
    ProgressbarModule,
    PaginationModule,
    TooltipModule,
    FormsModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiModule { }
