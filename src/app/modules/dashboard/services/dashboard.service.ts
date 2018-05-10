import { Injectable } from '@angular/core';
import {ApiService} from "utils/services/api.service";
import {Router, ActivatedRoute} from "@angular/router";

@Injectable()
export class DashboardService {

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.api.getUserIdStream().subscribe(id => {
      this.id = id
      console.log(id)
    })
  }

  id: number


  session(){
    return this.api.post({
      "size": 20
    }, "dictionary/session")
  }

  logout(){
    return this.api.post({}, "logout")
  }

  getUserData(){
    return this.api.getUserData();
  }

}
