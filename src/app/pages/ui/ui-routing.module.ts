import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { ColorsComponent } from './colors/colors.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { GridComponent } from './grid/grid.component';
import { ImagesComponent } from './images/images.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { ModalsComponent } from './modals/modals.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { ProgressComponent } from './progress/progress.component';
import { NotificationComponent } from './notifications/notifications.component';
import { MediaComponent } from './media/media.component';
import { EmbedVideoComponent } from './embed-video/embed-video.component';
import { TypographyComponent } from './typography/typography.component';
import { ListsComponent } from './lists/lists.component';
import { LinksComponent } from './links/links.component';
import { GeneralComponent } from './general/general.component';
import { UtilitiesComponent } from './utilities/utilities.component';


const routes: Routes = [
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'accordions',
    component: AccordionsComponent
  },
  {
    path: 'modals',
    component: ModalsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'embed-video',
    component: EmbedVideoComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'offcanvas',
    component: OffcanvasComponent
  },
  {
    path: 'placeholders',
    component: PlaceholdersComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'notifications',
    component: NotificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
