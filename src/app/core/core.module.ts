import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "core/core.routing";
import {ApiService} from "utils/services/api.service";
import {DeactivateGuard} from "utils/guards/deactivate.guard";
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {IsLoggedInGuard} from "utils/guards/is-logged-in.guard";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    AppRoutingModule,
  ],
  declarations: [],
  providers: [ApiService, DeactivateGuard, IsLoggedInGuard]
})

export class CoreModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use(translate.getBrowserLang());

  }
}


