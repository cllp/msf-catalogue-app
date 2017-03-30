import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FakeService} from "app/services/fake.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

   posts:any[];
  constructor(private fakeService:FakeService) { }

  ngOnInit() {
  }
  
   loadPosts(){
    this.fakeService.getPosts().subscribe(data=>{
      this.posts = data;
    },error=>console.log('error in loading the posts'));
  }
  

}
