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
  selectFile(fileinput) {
   fileinput.click();
  }

  handleFile(event , text) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      text.value = '';
      text.disabled = true;
     /*  const message = {
        from : this.me.username,
        to : this.chatwith.username,
        hasMsg: false,
        hasFile: true,
        fileLink: String,
        filename: String,
        time: Date.now(),
        file : fileList[0]
      }; */
    }
  }


  sendmsg(textInput, chatFile) {
    const fileList: FileList = chatFile.files;
    if (textInput.value) {
    this.loading = true;
    const message: any = {};
    let text = textInput.value;
    text = text.trim();
    if (text) {
      message.hasMsg = true;
      message.hasFile = false;
      message.hasImg =false ;
      message.message = text;
      message.from = this.me.username;
      message.to = this.chatwith.username;
      message.time = Date.now();
    }
    console.log(message);

    this.socket.emit('sendMessage', message, resp => {
      this.loading = false;
      if (!resp.success) {
        alert('error in sending message');
      } else {
        this.messages.push(message);
      }
    });

    textInput.value = '';
    }   else if (fileList.length > 0) {
      this.loading = true;
      const file = fileList[0];
      const body = new FormData();
      const date = Date.now().toString;
          body.append('from' , this.me.username);
          body.append('to' , this.chatwith.username);
          body.append('filename' , file.name );
          body.append('file', file, file.name);
      this._chat.chatfile(body)
      .subscribe(resp => {
          this.loading = false;
          if (resp.response === 'success') {
            const msg = resp.message ;
            this.socket.emit('sendMessage', msg, msgresp => {
              this.loading = false;
              if (!msgresp.success) {
                alert('error in sending message');
              } else {
                this.messages.push(msg);
              }
            });
          } else {
            alert('error in sending message');
          }
      });
 }
  }
  /* register() {
    this.loading = true;
    const body: any = new FormData();

    this._authenticateService.register(body)
      .subscribe(resp => {
        console.log(resp);
        this.lastpage = 'none';
        this.firstpage = 'none';
        this.infopage = 'block';
        if (resp.response === 'success') {
          this.registerError = 'none';
          this.registerInfo = 'block';
        } else {
          this.errorMessage = resp.message || this.errorMessage;
          this.registerError = 'block';
          this.registerInfo = 'none';
        }
      }, err => {
        console.log(err);
        this.lastpage = 'none';
        this.firstpage = 'none';
        this.infopage = 'block';
        this.registerError = 'block';
        this.registerInfo = 'none';
      });

  } */


}
