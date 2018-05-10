import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';
import {Router} from "@angular/router";

const URL = 'http://localhost:8080/projectvocabulary/';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {
    this.get("dictionary/session").toPromise().then(() => this.isLoggedIn = true).catch(() => this.isLoggedIn = false)
  }

  private currentUserId: number;

  private userIdStream = new Subject();

  public isLoggedIn: boolean = false;

  private user: any;

  getUserIdStream(): Observable<any> {
    return Observable.from(this.userIdStream).startWith(this.currentUserId);
  }

  post(obj: any, path: string) {
    return this.http.post(URL + path, obj)
  }

  get(path: string) {
    return this.http.get(URL + path)
  }

  put(path: string, data: any){
    console.log(path, data)
    return this.http.put(URL + path, data)
  }

  logIn(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.http.post(URL+'login', {
        email: email,
        password: password
      }).subscribe(data => {
        if(data['id']){
          this.userIdStream.next(data['id']);
          console.log(data);
          this.user = data;
          console.log(data['id']);
          this.currentUserId = data['id'];
          this.isLoggedIn = true;
          resolve()
        }else {
          reject(data)
          this.isLoggedIn = false;
        }
      }, error => {
        reject(error)
      })
    })
  }


  getUserData(): any {
    return this.user;
  }
}
