import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_services/authenticate.service';
import { ValidatorService } from '../_services/validator.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})


export class RegisterFormComponent implements OnInit {
  model: any = {
    gender : 'male'
  };
  loading = false;
  emailvalid: boolean;
  phonevalid: boolean;
  emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegEx = /^\d{10}$/;
  registerError = 'none';
  registerInfo = 'none';
  isMale = true ;
  imageSelected = 'none';

  usernameTooShort = false ;
  userAlredyExists = false ;
  emailAlredyExists = false ;
  phoneAlredyExists = false ;


  firstpage = 'block';
  infopage = 'none';
  lastpage = 'none';

  handleFile(files, imgPreview) {
    this.model.rotation = 0;
    imgPreview.style.transform = 'rotate(0deg)';
    this.model.fileToUpload = files.item(0);
    console.log(files[0]);
    const reader = new FileReader();

    reader.readAsDataURL(files.item(0));
     this.imageSelected = 'block';
    reader.onload = function (ev) {
      const target: any = ev.target;
      imgPreview.src = target.result ;
    };

  }
rotate90(imgtag) {
  const ang = parseInt(this.model.rotation, 0) || 0;
imgtag.style.transform = 'rotate(' + (90 + ang) + 'deg)';
  this.model.rotation = (90 + ang) % 360 ;
}

  checkUsername(value) {
    this.usernameTooShort = value.length < 6 ;
    if (!this.usernameTooShort) {
         this._validaterService.usernameValid(value)
      .subscribe(resp => {
        this.userAlredyExists = !resp.response ;
        if ( resp.response ) {
          this.model.username = value;
        }
      }, err => {

      });
  }
    }


  avoidSpaceUsername(event) {
    if (event.which === 32) {
      return false;
    }
      this.usernameTooShort = false ;
      this.userAlredyExists = false ;
  }
  checkEmail(value) {
    const a = value.match(this.emailRegEx);
    if (a === null) {
      this.emailvalid = false;
    } else {
      this.emailvalid = true;
      this._validaterService.emailValid(value)
      .subscribe(resp => {
        this.emailAlredyExists = !resp.response ;
        if (resp.response) {
          this.model.email = value;
        }
      }, err => {

      });
    }

  }

  avoidSpaceEmail(event) {
    if (event.which === 32) {
      return false;
    }
      this.emailAlredyExists = false ;
  }

  checkPhone(value) {
    const a = value.match(this.phoneRegEx);
    if (a === null) {
      this.phonevalid = false;
    } else {
      this.phonevalid = true;
      this._validaterService.phoneNoValid(value)
        .subscribe(resp => {
          this.phoneAlredyExists = !resp.response;
          if (resp.response) {
            this.model.phoneNo = value;
          }
        }, err => {

        });
    }

  }

  avoidSpacePhone(event) {
    this.phoneAlredyExists = false;
  }


nextPage () {

  if ( this.model.username && this.model.email && this.model.phoneNo ) {
      if ( this.emailvalid && this.phonevalid && !this.userAlredyExists && !this.usernameTooShort) {
              this.lastpage = 'block';
              this.firstpage = 'none' ;
              this.infopage = 'none';
      }

  } else {
    this.emailvalid = this.model.email && true ;
    this.phonevalid = this.model.phoneNo && true ;
    this.usernameTooShort = this.model.phoneNo ?  this.model.phoneNo.length > 6 : true;
  }

}

prevPage () {
  this.lastpage = 'none';
  this.firstpage = 'block';
  this.infopage = 'none';

}








  constructor(private _authenticateService: AuthenticateService,
              private _validaterService: ValidatorService,
              private route: ActivatedRoute, private router: Router) {
    this.emailvalid = true;
    this.phonevalid = true;
  }

  ngOnInit() {
  }





  register() {
    this.registerError = 'none';
    this.registerInfo = 'none';

console.log(this.model);
this.loading = true ;
/* setTimeout(() => {
  this.loading = false;
}, 2000); */


      this._authenticateService.register(this.model.username, this.model.email, this.model.phoneNo)
        .subscribe(resp => {
          console.log(resp);
          this.lastpage = 'none';
          this.firstpage = 'none';
          this.infopage = 'block';
          if (resp.response === 'success' ) {
            this.registerError = 'none';
            this.registerInfo = 'block';
          } else {
            this.registerError = 'block';
            this.registerInfo = 'none';
          }
        }, err => {
          console.log(err);
          this.lastpage = 'none';
          this.firstpage = 'none';
          this.infopage = 'block';
          this.registerError = 'block';
          this.registerInfo = 'none';
        });

  }

  selectImage(profilePic) {
    console.log(profilePic);
    profilePic.click();
  }
  radioClick(value) {
    this.isMale = value === 'male';
    this.model.gender = value;
    console.log(value);
  }


}
