import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "module/dashboard/dashboard.component";
import {UserdataComponent} from "module/dashboard/userdata/userdata.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'userdata', component: UserdataComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
