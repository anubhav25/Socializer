import { Component, OnInit } from '@angular/core';
import { ChatService } from '../_services/chat.service';
import { AuthenticateService } from '../_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
/* import { join } from 'path'; */

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  me: any  ;
  users: any;
/*
 joinRoom() {
    this._chat.joinRoom(this.me.username);
  } */
  constructor(private _chat: ChatService, private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    this._authenticateService.isLoggedIn()
      .subscribe(resp => {
        if (resp.message && resp.user) {
          this.me = resp.user;

        } else {
          this.router.navigate(['/login']);
        }
      });


  }


  ngOnInit() {
  }

}
