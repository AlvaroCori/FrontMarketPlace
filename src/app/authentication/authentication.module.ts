import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationComponent } from './authentication.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
