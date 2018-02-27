import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  model: any = {};
  loading = false;
  emailvalid: boolean;
  phonevalid: boolean;
  wrongPasswordAlert = 'none';
  emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegEx = /[0-9]{10,10}$/;
  loginError = '';


  constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    this.emailvalid = true;
    this.phonevalid = true;
  }

  ngOnInit() {
  }



  login() {
    this.loading = true;
    this.wrongPasswordAlert = 'none';
    /* setTimeout(() => {
      this.loading = false;
    }, 2000); */
    this._authenticateService.login(this.model.username, this.model.password)
      .subscribe(resp => {
        console.log(resp);
        console.log(resp.message);
        if (resp.response !== 'success') {
          this.loginError = resp.message;
          this.wrongPasswordAlert = 'block';
        } else {
          this.wrongPasswordAlert = 'none';
          this.router.navigate(['/home']);
        }
        this.loading = false;
        // this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        this.loginError = ' Server Error ';
        this.loading = false;
      });
  }


}
