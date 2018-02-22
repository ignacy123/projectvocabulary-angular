import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from "module/authentication/utils/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :'';
  }

  logIn(){
    this.service.logIn(this.email.value, this.password.value)
      .subscribe(
        res => {
          console.log(res);
          //TODO akcja wykonywana jeżeli ok
          this.router.navigate(["/dashboard"]);
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
  constructor(private service: AuthenticationService, private router: Router) {
  }

  ngOnInit() {

  }

}
