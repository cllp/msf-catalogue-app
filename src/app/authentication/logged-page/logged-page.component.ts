import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from "app/services/auth.service"

@Component({
  templateUrl: './logged-page.component.html',
})
export class LoggedPageComponent implements OnInit {
  pageTitle = 'Login Works';
  constructor(private authService: AuthService,private _router: Router,) {
  }

   ngOnInit() {
      this._router.navigate(['pages/product']);
   }

   goTo() {
     let profile = JSON.parse(localStorage.getItem("userProfile"));
     console.log(profile["email"]);
   }

}