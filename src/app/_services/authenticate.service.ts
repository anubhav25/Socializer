import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticateService {

  baseUrl: String = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  login(username: String , password: String) {
    return this._http.post<any>(this.baseUrl + '/login', { username : username, password : password })
        .map (resp => {
 //         console.log(resp);
          if (!resp) {
            return { response: 'fail', message: 'Password or username is incorrect' };
          }
          return resp;
        });
  }

  register ( username: String, email: String, phoneNo: String) {
    return this._http.post<any>( this.baseUrl + '/register', { username: username, email: email, phoneNo : phoneNo })
      .map(resp => {
 //         console.log(resp);
        if (!resp) {
          return { response: 'fail'};
        }
        return resp;
      });
  }

  logout() {
    return this._http.get<any>( this.baseUrl + '/logout')
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
