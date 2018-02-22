import {NgModule} from '@angular/core';
import {Location} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'},
  {path: 'sign-in', loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule'},
  {path: '', redirectTo: 'sign-in', pathMatch: 'prefix'},
  {path: '**', redirectTo: 'sign-in'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    // other imports here
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
