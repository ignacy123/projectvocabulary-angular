import { Injectable } from '@angular/core';
import {ApiService} from "utils/services/api.service";
import {Router, ActivatedRoute} from "@angular/router";

@Injectable()
export class DashboardService {

  constructor(private api: ApiService, private route: ActivatedRoute) {

  }

  private id: number;


  getUserData(){
    return this.api.get("users/"+this.id)
  }


}
