import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationRoutingModule } from "module/authentication/authentication.routing";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [SignInComponent, RegistrationComponent]
})
export class AuthenticationModule { }
