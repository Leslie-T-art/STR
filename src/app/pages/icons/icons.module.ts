import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Roue
import { IconsRoutingModule } from './icons-routing.module';

// Component
import { RemixComponent } from './remix/remix.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PhosphorComponent } from './phosphor/phosphor.component';

@NgModule({
  declarations: [
    RemixComponent,
    BootstrapComponent,
    PhosphorComponent,
  ],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
