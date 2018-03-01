import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<!-- Navigation -->
            <nav class="navbar navbar-expand-md navbar-light fixed-top"  id="mainNav">
              <div class="container">
                <div *ngIf="user.admin && true; then adminBlock; else userBlock"></div>
                  <ng-template #adminBlock>
                    <a class="navbar-brand js-scroll-trigger" href="/admin">{{ title }}</a>
                  </ng-template>

                  <ng-template #userBlock>
                      <a class="navbar-brand js-scroll-trigger" href="/home">{{ title }}</a>
                  </ng-template>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fa fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive" >
                  <ul class="navbar-nav ml-auto pull-right">
                    <li class="nav-item">
                      <form name="form" >
                        <input type="text" class="form-control lowercase pull-right" placeholder="search" name="search" (keyup)="search($event)" />
                      </form>
                    </li>
                    <li class="nav-item">
                      <a class="btn btn-outline-success buttonIcon pull-right" (click)="logout()"><span class="buttonText"> {{ user.username }} &nbsp;</span><i class='fa fa-user'></i></a>
                    </li>
                    <li class="nav-item" *ngIf="user.admin && true ">
                      <a class="btn btn-outline-success buttonIcon pull-right" id="requestsButton"  href="/admin/requests"><span class="buttonText">Requests&nbsp;</span><i class='fa fa-user-plus'></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="btn btn-outline-success buttonIcon pull-right" (click)="logout()"><span class="buttonText">messages&nbsp;</span><i class='fa fa-envelope'></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="btn btn-outline-success buttonIcon pull-right" (click)="logout()"><span class="buttonText">logout&nbsp;</span><i class='fa fa-sign-out'></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>`,
  styles: [`
  .lowercase {
    text-transform: lowercase;
}
  i {
    width : 1rem ;
  }
  .buttonIcon {
    margin-left : 1rem ;
  }
@media (max-width: 767px) {
  .buttonIcon .buttonText {
     min-width: 10rem;
  }
}

 .buttonIcon .buttonText {
  max-width: 0;
  -webkit-transition: max-width 1s;
  transition: max-width 1s;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  overflow: hidden;
}
.buttonIcon:hover .buttonText {
  max-width: 10rem;
}
  `]
})
export class NavbarComponent implements OnInit {

  @Input() public user: any ;

  title = 'socializer' ;
  constructor() {
  // const path = window.location.pathname ;
   }

  ngOnInit() {
  }
  search(event) {

    let text = event.target.value ;
    text = text.trim();
    if (event.which ===  13 && text) {

console.log(text);
    }


  }
  logout() {
    console.log('logout');
  }
}
