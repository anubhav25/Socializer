import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AdminService {
  private myobj = new BehaviorSubject('');
  currentUser = this.myobj.asObservable();
  me: any;
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

  accept(username: String) {
    return this._http.post<any>(this.baseUrl + '/acceptUser', { username: username })
      .map(resp => {
        //         console.log(resp);
        if (!resp) {
          return { response: 'fail' };
        }
        return resp;
      });
  }
  reject(username: String) {
    return this._http.post<any>(this.baseUrl + '/rejectUser', { username: username })
      .map(resp => {
        //         console.log(resp);
        if (!resp) {
          return { response: 'fail' };
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

  getme()  {
     return this.me ;
  }

  isLoggedIn() {
     return this._http.get<any>(this.baseUrl + '/isLoggedin')
      .map(resp => {
        if (resp.message && resp.user) {
          this.myobj.next(resp.user);
          this.me = resp.user ;

        }
        return resp;

      });


  }

}
