import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminService {

  baseUrl: String = 'http://localhost:3000/admin';
  constructor(private _http: HttpClient) {
    // this.baseUrl = '/api' ;
  }

  getRequestsList() {
    return this._http.get<any>(this.baseUrl + '/userRequests' )
      .map(resp => {
        return resp;
      }, err => {
        return { response: 'server error' } ;
      }) ;
  }

  login(username: String, password: String) {
    return this._http.post<any>(this.baseUrl + '/login', { username: username, password: password })
      .map(resp => {
        //         console.log(resp);
        if (!resp) {
          return { response: 'fail', message: 'Password or username is incorrect' };
        }
        return resp;
      });
  }

  logout() {
    return this._http.get<any>(this.baseUrl + '/logout')
      .map(resp => {
        return resp;
      });
  }

  isLoggedIn() {
    return this._http.get<any>(this.baseUrl + '/isLoggedin')
      .map(resp => {
        return resp;
      });
  }

}
