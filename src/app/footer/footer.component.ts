import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

<!-- Footer -->
<footer>
    <div class="container text-center">
        <p>Copyright &copy; Socializer 2018</p>
        <p> created by Anubhav and Jyoti</p>
    </div>
</footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
