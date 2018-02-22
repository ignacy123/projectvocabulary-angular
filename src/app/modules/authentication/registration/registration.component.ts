import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {AuthenticationService} from "module/authentication/utils/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  passwordConfirmation = new FormControl('', [Validators.required, this.passwordValidator.bind(this)]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  uid = new FormControl('', []);


  constructor(fb: FormBuilder, private  service: AuthenticationService, private router: Router) {

  }

  ngOnInit() {

  }

  register(){
    if(this.uid.value === ''){
      this.service.register(this.email.value, this.password.value, this.firstName.value, this.lastName.value).toPromise().then(data => {
        this.router.navigate(['/sign-in'])
        console.log(data)
      }, error=>{
        alert("Email not unique")
      })
    }else{
      this.service.registerWithUid(this.email.value, this.password.value, this.firstName.value, this.lastName.value, this.uid.value);

    }
  }

  passwordValidator() {
    if (this.password && this.passwordConfirmation) {
      if (this.password.value == this.passwordConfirmation.value) {
        return null;
      }
      return {
        passwordConfirmation: true
      }
    }
  }

  lockButton(): boolean{
    return this.email.invalid && this.password.invalid && this.passwordConfirmation.invalid && this.firstName.invalid && this.lastName.invalid

  }

  canDeactivate(){
    return !(this.email.value || this.password.value || this.passwordConfirmation.value || this.firstName.value || this.lastName.value)
  }


}
