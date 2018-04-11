import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "module/dashboard/dashboard.component";
import {UserdataModule} from "module/userdata/userdata.module";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: ''},
  { path: '/userdata', component: UserdataModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
