import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  me: any;

  constructor(private _adminService: AdminService, private route: ActivatedRoute, private router: Router) {
         this._adminService.isLoggedIn()
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
