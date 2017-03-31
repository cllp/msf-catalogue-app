import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FakeService} from "app/services/fake.service";

import { Location } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  posts:any[];
    constructor(private router:Router, private fakeService:FakeService,private location:Location) {
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

}
