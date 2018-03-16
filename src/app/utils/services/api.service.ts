import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private _currentUserId: number;

  private _userIdStream = new Subject(<number>);

  get userIdStream(): Subject {
    return Observable.from(this._userIdStream);
  }

  post(obj: any, path: string) {
    return this.http.post('http://localhost:8080/projectvocabulary/' + path, obj)
  }

  get(path: string) {
    return this.http.get('http://localhost:8080/projectvocabulary/' + path)
  }

  logIn(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/projectvocabulary/login', {
        email: email,
        password: password
      }).subscribe(data => {
        if(data['id']){
          this._userIdStream.next(data['id'])
          resolve()
        }else {
          reject(data)
        }
      }, error => {
        reject(error)
      })
    })
  }

}
