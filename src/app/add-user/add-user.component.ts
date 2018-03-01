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
    }, err => {

    });
  }

  ngOnInit() {
  }

}
