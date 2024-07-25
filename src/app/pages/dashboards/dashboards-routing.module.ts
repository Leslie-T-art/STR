import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { IndexComponent } from './index/index.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "ecommerce",
    component: EcommerceComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
