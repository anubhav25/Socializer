import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ValidatorService {

  baseUrl: String = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) {
    // this.baseUrl = '/api';
   }

  usernameValid(username: String) {
    return this._http.post<any>(this.baseUrl + '/usernameVaild', { username: username })
      .map(resp => {
        if (!resp) {
          return { response: false};
        }
        return resp;
      });
  }
  emailValid(email: String) {
    return this._http.post<any>(this.baseUrl + '/emailVaild', { email: email })
      .map(resp => {
        if (!resp) {
          return { response: false};
        }
        return resp;
      });
  }
  phoneNoValid(phoneNo: String) {
    return this._http.post<any>(this.baseUrl + '/phoneNoVaild', { phoneNo: phoneNo })
      .map(resp => {
        if (!resp) {
          return { response: false};
        }
        return resp;
      });
  }

}

