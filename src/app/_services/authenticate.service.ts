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
        console.log(resp);
/*                 resp = {
          message: true,
          user: {
            '_id': '5a9e6c3f4701de2af429fe0f',
            'username': 'anubhav789',
            'email': 'anubhav@mailinator.com',
            'phoneNo': '7404541567',
            'fullname': 'anubhav',
            'dob': new Date('1996-05-25T05:30:00.000+05:30'),
            'gender': 'male',
            'imglink': '/assets/profilePictures/anubhav-1520331635492.jpg',
            'thumbnail': '/assets/thumbnails/anubhav-1520331635492.jpg',
            'description': 'asmjdhkaj',
            '__v': 0
          }
        }; */
        if (resp.message && resp.user) {
          this.myobj.next(resp.user);
          this.me = resp.user;

        }
        return resp;

      });


  }


}
