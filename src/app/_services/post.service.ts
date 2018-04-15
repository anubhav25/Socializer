import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PostService {

  baseUrl: String = 'http://localhost:3000/post';
  constructor(private _http: HttpClient) {
  }

  newpost(formData: any) {
    const header = new HttpHeaders();
    header.append('enctype', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = { headers: header };
    return this._http.post<any>(this.baseUrl + '/newpost', formData, options)
      .map(resp => {
      //  console.log(resp);
        if (!resp) {
          return { response: 'fail' };
        }
        return resp;
      });
  }

  getposts() {
    return this._http.get<any>(this.baseUrl + '/posts')
    .map((resp) => {
     // console.log(resp);
      if ( resp.response ) {
        return resp.posts;
      } else {
        return [];
      }
    });
  }
  like(myid, postid) {
    return this._http.post<any>(this.baseUrl + '/like', { myid : myid, postid: postid })
    .map((resp) => {
      return resp;
    });
  }
  delete(myid, postid) {
    return this._http.post<any>(this.baseUrl + '/delete', { author: myid, postid: postid })
      .map((resp) => {
        return resp;
      });
  }
  unlike(myid, postid) {
    return this._http.post<any>(this.baseUrl + '/unlike', { myid: myid, postid: postid })
      .map((resp) => {
        return resp;
      });
  }
  comment(name, postid, comment) {
    return this._http.post<any>(this.baseUrl + '/comment', { name: name, postid: postid , comment : comment})
      .map((resp) => {
        return resp;
      });
  }
}

