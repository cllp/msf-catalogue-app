import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private router:Router,
  private location: Location) { }

  ngOnInit() {
  }

  //This is a method that you can use in the html.
  goToProducts(){
    //Notice the router instance how it was loaded in the constructor.
    //That apply to all services. No need to use 'new' keyword to instatiate an object.
    this.router.navigate(['product','products']);
  }
  goBack(): void {
    this.location.back();
  }

}
