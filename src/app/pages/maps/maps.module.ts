import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Google Map// module  
import { GoogleMapsModule } from '@angular/google-maps';
// Leaflet map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// Component
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
  declarations: [
    GoogleComponent,
    LeafletComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    LeafletModule,
    SharedModule,
    GoogleMapsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule { }
