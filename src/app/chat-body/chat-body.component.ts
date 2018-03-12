import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../_services/chat.service';
import * as moment from 'moment';
@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {
  @Input() chatwith: any;
  @Input() me: any;
  loading: Boolean = false;
  socket: any;
  messages: any[] = [];
  constructor(private _chat: ChatService) {
    console.log(moment);
    this.socket = _chat.getSocket();
   this.socket.on('sendMessage', (message) => {
      console.log(message);
      this.messages.push(message);
    });
     }

  ngOnInit() {

  }
  sendmsg(textInput) {

    this.loading = true ;
    const message: any = {} ;
    let text = textInput.value ;
    text = text.trim();
    if ( text ) {
      message.hasMsg = true;
      message.hasImage = false ;
      message.hasFile = false ;
      message.message = text ;
      message.from = this.me.username;
      message.to = this.chatwith.username;
      message.time = new Date();
    }
    console.log(message);

      this.socket.emit('sendMessage', message, resp => {
        this.loading = false;
        if ( !resp.success ) {
         alert('error in sending message') ;
        } else {
          this.messages.push(message);
        }
      });

    textInput.value = '';

  }

}
