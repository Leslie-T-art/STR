import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PassResetComponent } from './pass-reset/pass-reset.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LogoutComponent } from './logout/logout.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { TwostepComponent } from './twostep/twostep.component';
import { Error404Component } from './errors/error404/error404.component';
import { Error500Component } from './errors/error500/error500.component';
import { OfflineComponent } from './errors/offline/offline.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'pass-reset',
    component: PassResetComponent,
  },
  {
    path: 'pass-change',
    component: PassChangeComponent,
  },
  {
    path: 'lockscreen',
    component: LockscreenComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'success-msg',
    component: SuccessMsgComponent,
  },
  {
    path: 'twostep',
    component: TwostepComponent,
  },
  {
    path: '404', 
    component:Error404Component
  },
  {
    path: '500', 
    component:Error500Component
  },
  {
    path: 'offline', 
    component:OfflineComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
