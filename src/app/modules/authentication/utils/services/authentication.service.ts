import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "utils/services/api.service";

@Injectable()
export class AuthenticationService {

  constructor(private api: ApiService) {
  }

  logIn(email: string, password: string) {
    return this.api.post({email: email, password: password}, 'login')
  }

  register(email: string, password: string, firstName: string, lastName: string) {
    return this.api.post({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      type: 'STUDENT'
    }, 'register')
  }

  registerWithUid(email: string, password: string, firstName: string, lastName: string, uid: string) {
    return this.api.post({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      type: 'STUDENT',
      uid: uid
    }, 'registerWithUid')
  }

}
