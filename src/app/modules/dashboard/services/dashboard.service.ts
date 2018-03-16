import { Injectable } from '@angular/core';
import {ApiService} from "utils/services/api.service";
import {Router, ActivatedRoute} from "@angular/router";

@Injectable()
export class DashboardService {

  constructor(private api: ApiService, private route: ActivatedRoute) { }


  session(){
    return this.api.post({
      "size": 20
    }, "dictionary/session")
  }

  logout(){
    return this.api.post({}, "logout")
  }

  getUserData(id: number){
    return this.api.get("groups/get?groupId=2");
  }

}
