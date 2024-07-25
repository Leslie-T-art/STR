import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { SweetalertsComponent } from './sweetalerts/sweetalerts.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { SwipersComponent } from './swiper/swiper.component';


const routes: Routes = [
  {
    path: 'sweetalerts',
    component: SweetalertsComponent
  },
  {
    path: 'scrollspy',
    component: ScrollspyComponent
  },
  {
    path: 'highlight',
    component: HighlightComponent
  },
  {
    path: 'highlight',
    component: HighlightComponent
  },
  {
    path: 'ratings',
    component: RatingsComponent
  },
  {
    path: 'scrollbar',
    component: ScrollbarComponent
  },
  {
    path: 'swiper',
    component: SwipersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceUiRoutingModule { }
