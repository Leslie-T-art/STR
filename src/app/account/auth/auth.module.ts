import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { AuthRoutingModule } from './auth-routing.module';

// Component
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

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    PassResetComponent,
    PassChangeComponent,
    LockscreenComponent,
    LogoutComponent,
    SuccessMsgComponent,
    TwostepComponent,
    Error404Component,
    Error500Component,
    OfflineComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
