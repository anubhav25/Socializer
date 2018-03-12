import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  baseUrl: String = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) {
  }


  search(query: string) {
    return this._http.get<any>(this.baseUrl + '/search/' + query)
      .map(resp => {
        return resp;
      }, err => {
        return { response: 'server error' };
      });
  }
  getuser(username: string) {
    return this._http.get<any>(this.baseUrl + '/user/' + username)
      .map(resp => {
        return resp;
      }, err => {
        return { response: 'server error' };
      });
  }
}
