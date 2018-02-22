import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {DeactivateGuard} from "utils/guards/deactivate.guard";

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'registration', component: RegistrationComponent, canDeactivate: [DeactivateGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
