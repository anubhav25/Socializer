import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  users: any[] ;
  constructor(private _adminService: AdminService, private route: ActivatedRoute, private router: Router) {
    this._adminService.getRequestsList()
    .subscribe(resp => {
          this.users = resp ;
          console.log(this.users);
    }, err => {

    });
  }
accept(username) {
  this._adminService.accept(username)
    .subscribe(resp => {
      console.log(resp);
      if (resp.response === 'success') {
        const div = document.getElementById(username);
        div.parentElement.removeChild(div);
        for (const i in this.users) {
          if (this.users[i].username === username) {
            this.users.splice(parseInt(i, -1), 1);
          }
        }
        if (this.users.length < 1) {
          this._adminService.getRequestsList()
            .subscribe(resp2 => {
              this.users = resp2;
              console.log(this.users);
            }, err => {

            });
        }
      }
    }, err => {

    });
  }
  reject(username) {
    this._adminService.reject(username)
      .subscribe(resp => {
        console.log(resp);
        if (resp.response === 'success') {
          const div = document.getElementById(username);
          div.parentElement.removeChild(div);
          for (const i in this.users ) {
              if (this.users[i].username === username) {
                  this.users.splice(parseInt(i, -1), 1);
              }
          }
          if (this.users.length < 1 ) {
            this._adminService.getRequestsList()
              .subscribe(resp2 => {
                this.users = resp2;
                console.log(this.users);
              }, err => {

              });
          }

        }
      }, err => {

      });
  }
    ngOnInit() {
  }

}
