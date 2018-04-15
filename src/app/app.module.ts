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
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MessagesComponent } from './messages/messages.component';


import { NgChatModule } from 'ng-chat';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ChatService } from './_services/chat.service';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { TempComponent } from './temp/temp.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './_services/post.service';
import { PostComponent } from './post/post.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };




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
    AddUserComponent,
    ProfileComponent,
    ChangePasswordComponent,
    MessagesComponent,
    ChatUserListComponent,
    ChatBodyComponent,
    TempComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChatModule,
    SocketIoModule.forRoot(config) ,
    RouterModule.forRoot([
      {
        path :  '',
        redirectTo : '/home',
        pathMatch : 'full'
      },
      {
        path: 'logout',
        component: LoginComponent
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
        path: 'register',
        component: LoginComponent
      },
      {
        path: 'changepassword',
        component: ChangePasswordComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'profile/:username',
        component: ProfileComponent
      },
      {
        path: 'temp',
        component: TempComponent
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
      }
    ])
  ],
  providers: [ AuthenticateService, ValidatorService, AdminService , UserService, ChatService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
