import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  post(obj: any, path: string) {
    return this.http.post('http://localhost:8080/projectvocabulary/'+path, obj)
  }

}
