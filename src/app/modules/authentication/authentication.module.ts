import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignInComponent, RegistrationComponent]
})
export class AuthenticationModule { }
