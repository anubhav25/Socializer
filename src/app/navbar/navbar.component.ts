import { Component, OnInit , Input } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .searchDiv {
    width : 100%;
    position: relative;
  }
  .searchBar {
    width : 100%;
    height : 50px;
  }
  .searchResultItem {
    height : 37px;
    max-height : 37px;
  }
    .searchResultItem img{
      position : absolute ;

  }
      .searchResultItem div{
     margin-left : 37px;
     overflow: hidden;

  }
  .searchResults {
    position: absolute;
    width: 100% ;
    background: #444;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid gray;

    left: 0;
    right: 0;
    top: 30px;
  }

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
  focusOnSearch = false ;
  title = 'socializer' ;
  items: any[];
  searchText = '';
    constructor(private _userService: UserService) {
  // const path = window.location.pathname ;
   }

  ngOnInit() {
  }
  search(event) {
    event.preventDefault();
    let text = event.target.value ;
    text = text.trim();
    if (text && text.length > 2 && text !== this.searchText ) {
this.searchText = text ;
console.log(text);
this._userService.search(text)
.subscribe(resp => {
  console.log(resp);
  this.items = resp;
});
    }
    if (text && text.length < 3) {
      this.items = [];
      this.searchText = '';
    }


  }
  logout() {
    console.log('logout');
  }
}
