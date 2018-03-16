import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DashboardService} from "module/dashboard/services/dashboard.service";
import {ApiService} from "utils/services/api.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private id: number;
  constructor(private service: DashboardService, private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
  }
  ngOnInit() {
    console.log(this.route);
    this.apiService.userIdStream.subscribe(id => this.id = id)
  }

  logOut(){
    this.service.logout()
      .subscribe(
        res => {
          console.log(res);

          //TODO akcja wykonywana jeżeli ok
          this.router.navigate(["/"]
          );
        },
        err => {
          console.log("Error occured");
          if(err.status == 400){
            alert("Incorrect credentials. Try again.");
          }else {
            alert("Connection failed. Try again later.")
          }
        }
      );
  }
  getUserData(){
    this.service.getUserData(this.id)
      .subscribe(
        res => {
          console.log(res);

          //this.router.navigate(["/user-data"] TODO kolejny moduł

        },
        err => {
          console.log("Error occured");
          if(err.status == 400){
            alert("Incorrect credentials. Try again.");
          }else {
            alert("Connection failed. Try again later.")
          }
        }
      );
  }
  session(){
    this.service.session()
  }
}
