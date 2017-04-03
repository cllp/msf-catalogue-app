import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FakeService} from "app/services/fake.service";
import { Location,} from '@angular/common';
import { DropdownToggleDirective } from 'app/dropdown-toggle.directive';
import { DropdownDirective } from 'app/dropdown.directive';
import {AuthService} from "app/services/auth.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {
    
    posts:any[];
    profile = JSON.parse(localStorage.getItem("userProfile"));
    username = this.profile["name"];
    
    constructor(private router:Router, private fakeService:FakeService,private location:Location,private authService:AuthService) {
    }
    ngOnInit() {
      this.loadPosts();
    }
    loadPosts(){
      this.fakeService.getPosts().subscribe(data=>{
        this.posts = data;
      },error=>console.log('error in loading the posts'));
    }

    goBack(): void {
      this.location.back();
    }
    startSignoutMainWindow() {
      localStorage.clear();
      this.authService.startSignoutMainWindow();
    }
}
