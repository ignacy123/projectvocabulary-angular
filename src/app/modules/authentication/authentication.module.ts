import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationRoutingModule } from "module/authentication/authentication.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from 'layout/layout.module'
import {AuthenticationService} from "module/authentication/utils/services/authentication.service";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    TranslateModule
  ],
  declarations: [SignInComponent, RegistrationComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
