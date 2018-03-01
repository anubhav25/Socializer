import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any ;
/*   test() {
    console.log('test');
    this._authenticateService.test().subscribe(a => {
      console.log(a);
    }, err => {
      console.log(err);
    });
  } */
  constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    /* this._authenticateService.isLoggedIn()
    .subscribe(resp => {
      if ( resp.message) {
        this.user = resp.user ;
      } else {
        this.router.navigate( ['/login'] ) ;
      }
    },
  err => {
      this.router.navigate( ['/login'] ) ;
  }); */

  this.user = {
    username : 'anubhav'
  } ;
  }

  ngOnInit() {
  }

}
