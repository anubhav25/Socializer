import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
user: any = {
  username : ''
};
  constructor(private _userservice: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this._userservice.getuser(params.username)
      .subscribe(resp => {
         console.log(resp);
        const date = new Date(resp.dob) ;
        resp.dob = date.getDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getFullYear();
        this.user = resp ;
      });
    });
  }

  ngOnInit() {
  }

}
