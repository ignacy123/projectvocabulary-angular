import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "core/core.routing";
import {ApiService} from "utils/services/api.service";
import {DeactivateGuard} from "utils/guards/deactivate.guard";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
  ],
  declarations: [],
  providers: [ApiService, DeactivateGuard]
})
export class CoreModule { }
