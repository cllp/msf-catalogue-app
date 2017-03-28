import { Component, OnInit} from '@angular/core';
import {AuthService} from "app/services/auth.service";

@Component({
  templateUrl: './logged-page.component.html',
})
export class LoggedPageComponent implements OnInit {
  
  pageTitle = 'Login Works';
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
   
  }

  
}