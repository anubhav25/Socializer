import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  me: any ;
  constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    this._authenticateService.isLoggedIn()
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
