import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  title: String = 'Socializer';

  constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute , private router: Router) {
   this._authenticateService.logout();
   this.isLogin = window.location.href.endsWith('/login');
   }


  ngOnInit() {
  }



}

