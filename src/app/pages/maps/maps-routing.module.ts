import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { LeafletComponent } from './leaflet/leaflet.component';
import { GoogleComponent } from './google/google.component';

const routes: Routes = [
  {
    path: 'leaflet',
    component: LeafletComponent
  },
  {
    path: 'google',
    component: GoogleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
