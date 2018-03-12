import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: [`
  @media (min-width: 768px) {
    .navbar-collapse {
        height: auto;
        border-top: 0;
        box-shadow: none;
        max-height: none;
        padding-left: 0;
        padding-right: 0;
    }
    .navbar-collapse.collapse {
        display: block !important;
        width: auto !important;
        padding-bottom: 0;
        overflow: visible !important;
    }
    .navbar-collapse.in {
        overflow-x: visible;
    }
    .navbar {
        max-width: 300px;
        margin-right: 0;
        margin-left: 0;
    }
    .navbar-nav,
    .navbar-nav>li,
    .navbar-left,
    .navbar-right,
    .navbar-header {
        float: none !important;
    }
    .navbar-right .dropdown-menu {
        left: 0;
        right: auto;
    }
    .navbar-collapse .navbar-nav.navbar-right:last-child {
        margin-right: 0;
    }
}`]
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
