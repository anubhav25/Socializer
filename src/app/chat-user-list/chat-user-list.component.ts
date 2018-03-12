import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { ChatService } from '../_services/chat.service';
@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit, AfterViewInit {

  OnlineUsers: any;
  OfflineUsers: any;
  OnlineUsersCopy: any;
  OfflineUsersCopy: any;

  allUsers: any;
  me: any;
  chatwith: any;
  onlineUsersarr: any;

  constructor(private _chat: ChatService, private _authenticateService: AuthenticateService) {
   }

  ngAfterViewInit() {
    this._authenticateService.currentUser.subscribe(resp => {
      if (resp) {
        this.me = resp;
        this._chat.online(this.me.username);
        this._chat.onlineUsers.subscribe(onlineusers => {
          if (onlineusers) {
            this.onlineUsersarr = onlineusers;
            this._chat.getUsers()
              .subscribe(allresp => {
                this.allUsers = allresp;
                 this.OnlineUsers = this.allUsers.filter(e => {
                  return this.onlineUsersarr[e.username] && (e.username !== this.me.username);
                });
                this.OfflineUsers = this.allUsers.filter(e => {
                  return !this.onlineUsersarr[e.username] && (e.username !== this.me.username);
                });
                this.OnlineUsersCopy = this.OnlineUsers.slice();
                this.OfflineUsersCopy = this.OfflineUsers.slice();
              });
          }
        });

      }


    });


  }
  ngOnInit() {
  }

  showChat( val ) {
    this.chatwith = val ;
  }

search(val) {

  val = val.trim();
  if (val) {
 const regex = new RegExp('.*' + val + '.*', 'i');
  let newusers = this.OnlineUsersCopy.filter( function (e) {
  return regex.exec(e.username);
});
    this.OnlineUsers = newusers;
    newusers = this.OfflineUsersCopy.filter(function (e) {
      return regex.exec(e.username);
    });
    this.OfflineUsers = newusers;
} else {
    this.OnlineUsers = this.OnlineUsersCopy;
    this.OfflineUsers = this.OfflineUsersCopy;
}
}

}
