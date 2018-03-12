import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';
import * as siofu from 'socketio-file-upload/client.min';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService  {
  private myOnlineUsers = new BehaviorSubject('');
  onlineUsers = this.myOnlineUsers.asObservable();
  baseUrl: String = 'http://localhost:3000/chat/';

public getsiofu () {
  return siofu;
}

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
/* listFriends(): Observable<any> {
  return this._http.post(this.baseUrl + 'listFriends', { userId: this.userId })
    .map(resp => {
      console.log(resp );
      return resp;
    }); */

/* }
  listMyFriends() {
    // List connected users to show in the friends list
    // Sending the userId from the request body as this is just a demo
    return this._http.post(this.baseUrl + 'listFriends', { userId: this.userId } )
    .map( resp => {
        return resp;
    });
  }

  getMessageHistory(userId: any): Observable<Message[]> {
    // This could be an API call to your NodeJS application that would go to the database
    // and retrieve a N amount of history messages between the users.
    return JSON.parse('[]');
  }

*/
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
