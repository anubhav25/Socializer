import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticateService {
  private myobj = new BehaviorSubject('');
  currentUser = this.myobj.asObservable();
  me: any;
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
  changePassword(username: String , oldpassword: String , newpassword: String ) {

    return this._http.post<any>( this.baseUrl + '/changepassword', {
      username : username,
      oldpassword : oldpassword,
      newpassword : newpassword
    })
      .map(resp => {
        console.log(resp );
        return resp;
      });
  }
  getme() {
    return this.me ;
  }
  isLoggedIn() {
    return this._http.get<any>(this.baseUrl + '/isLoggedin')
      .map(resp => {
        if (resp.message && resp.user) {
          this.myobj.next(resp.user);
          this.me = resp.user;

        }
        return resp;

      });


  }


}
