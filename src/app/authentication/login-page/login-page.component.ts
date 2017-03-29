import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "app/services/auth.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

    constructor(private authService: AuthService) {
    }

  
  //This is a method that you can use in the html.
  startSigninMainWindow(){
    this.authService.startSigninMainWindow();
  }

  startSignoutMainWindow() {
    localStorage.clear();
    this.authService.startSignoutMainWindow();
  }

}
