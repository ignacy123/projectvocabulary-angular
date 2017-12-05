import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationRoutingModule } from "module/authentication/authentication.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from 'layout/layout.module'

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  declarations: [SignInComponent, RegistrationComponent]
})
export class AuthenticationModule { }
