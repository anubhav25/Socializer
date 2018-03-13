import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService  {
  private myOnlineUsers = new BehaviorSubject('');
  onlineUsers = this.myOnlineUsers.asObservable();
  baseUrl: String = 'http://localhost:3000/chat/';


  public online(username): void {
    this.socket.emit('online', username);
  }


  constructor(private _http: HttpClient, private socket: Socket) {
    this.InitializeSocketListerners();

  }
getUsers() {
  return this._http.get(this.baseUrl + 'users' )
  .map(resp => {
    return resp;
  });
}
getHistory(me, other) {
  return this._http.post(this.baseUrl + 'messages', {
    me : me,
    other : other
  } )
  .map(resp => {
    return resp;
  });
}
  chatfile(formData: any) {
    const header = new HttpHeaders();
    header.append('enctype', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = { headers: header };
    return this._http.post<any>(this.baseUrl + 'newchatfile', formData, options)
      .map(resp => {
        //         console.log(resp);
        if (!resp) {
          return { response: 'fail' };
        }
        return resp;
      });
  }



getSocket () {
  return this.socket ;
}

  public InitializeSocketListerners(): void {
    this.socket.on('onlinelistchanged', (message) => {
      console.log(message);
      this.myOnlineUsers.next(message);

    });


/*     this.socket.on('generatedUserId', (userId) => {
      // Initializing the chat with the userId and the adapter with the socket instance
    });

    this.socket.on('messageReceived', (messageWrapper) => {
      // Handle the received message to ng-chat
      this.onMessageReceived(messageWrapper.user, messageWrapper.message);
    });

    this.socket.on('friendsListChanged', (usersCollection: Array<User>) => {
      // Handle the received message to ng-chat
      this.onFriendsListChanged(usersCollection.filter(x => x.id !== this.userId));
    });
 */

  }
}
