import {NgModule} from '@angular/core';
import {Location} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'sign-in', loadChildren: 'app/modules/authentication/authentication.module#authenticationModule'},
  {path: '', redirectTo: 'sign-in', pathMatch: 'prefix'},
  {path: '**', redirectTo: 'sign-in'}
];

@NgModule({
  imports: [
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
