import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
<<<<<<< HEAD
import { Location }               from '@angular/common';
=======
import { Location } from '@angular/common';
>>>>>>> 9a4ff85b0dcf6737a8626e901da647b2274c5588

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private router:Router,
<<<<<<< HEAD
    private location: Location) { }
=======
  private location: Location) { }
>>>>>>> 9a4ff85b0dcf6737a8626e901da647b2274c5588

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
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
