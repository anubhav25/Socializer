import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  title: String = 'Socializer';

  me: any;
  model: any = {};
  error: String = 'Server Error.';
errorAlert = 'none';
successAlert = 'none';
sec = 5;
  constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    this._authenticateService.isLoggedIn()
      .subscribe(resp => {
        if (resp.message && resp.user) {
          this.me = resp.user;
          this.model.username = resp.user.username ;
        } else {
          this.router.navigate(['/login']);
        }
      });
    this._authenticateService.logout();

  }
  changePassword() {
    console.log(this.model);
    this._authenticateService.changePassword(this.model.username, this.model.oldpassword, this.model.newpassword )
    .subscribe( resp => {
      if ( resp.response !== 'success' ) {
        this.errorAlert = 'block' ;
        this.error = resp.message || this.error ;
      } else {
        this.errorAlert = 'none';
        this.successAlert = 'block';
        setInterval(() => {
           this.sec -= 1;
          if (this.sec === 0 ) {
            this.router.navigate(['/login']);
          }
        }, 1000 );
      }
    });
  }

  ngOnInit() {
  }

}


