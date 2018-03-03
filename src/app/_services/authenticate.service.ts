import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticateService {

  baseUrl: String = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) {
   // this.baseUrl = '/api' ;
  }

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

  register (formData: any) {
    const header = new HttpHeaders();
    header.append('enctype', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = { headers: header };
    return this._http.post<any>( this.baseUrl + '/register', formData , options)
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
