import { Component, OnInit} from '@angular/core';
import {AuthService} from "app/services/auth.service"

@Component({
  templateUrl: './logged-page.component.html',
})
export class LoggedPageComponent implements OnInit {
  _user: any;
  loadedUserSub: any;
  pageTitle = 'Login Works';
  attribute;

  constructor(private authService: AuthService) {
  }

   ngOnInit() {
     this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(users => {
              this._user = users;
        });
  }
}