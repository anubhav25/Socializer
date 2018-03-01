import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: any;
  constructor() {
  this.user = {
  username: 'anubhav admin',
  admin : 'admin'
};
  }
  ngOnInit() {
  }

}
