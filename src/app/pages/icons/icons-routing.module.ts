import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { RemixComponent } from './remix/remix.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PhosphorComponent } from './phosphor/phosphor.component';

const routes: Routes = [
  {
    path: 'remix',
    component: RemixComponent
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'phosphor',
    component: PhosphorComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
