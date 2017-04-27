import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { AuthService } from "app/services/auth.service";
import { DropdownModule } from "ngx-dropdown";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {
  profile = JSON.parse(localStorage.getItem("userProfile"));
  username = this.profile["name"]; 

   constructor(private router: Router, private authService: AuthService) { }
   startSignoutMainWindow() {
      localStorage.clear();
      this.authService.startSignoutMainWindow();
  }
  preValidationFunction(){
    this.router.navigate(['pages/pre-validation']);
  }
}    