import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthenticateService } from './_services/authenticate.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ValidatorService } from './_services/validator.service';
import { AdminService } from './_services/admin.service';
import { UserService } from './_services/user.service';
import { AdminComponent } from './admin/admin.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AddUserComponent } from './add-user/add-user.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path :  '',
        redirectTo : '/home',
        pathMatch : 'full'
      },
      {
        path :  'login',
        component : LoginComponent
      },
      {
        path :  'register',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [{
          path: 'requests',
          component: AddUserComponent
        }]
      },
      {
        path: '**',
       redirectTo : '/home'
      },
    ])
  ],
  providers: [ AuthenticateService, ValidatorService, AdminService , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
