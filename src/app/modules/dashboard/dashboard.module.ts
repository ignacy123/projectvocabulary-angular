import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "module/dashboard/dashboard.routing";
import {DashboardService} from "module/dashboard/services/dashboard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from 'layout/layout.module'

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
