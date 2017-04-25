import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ProductService } from "../../services/product.service";
import {IProduct} from 'app/models/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {

  imageWidth: number = 250;
  imageMargin: number = 2;
  products:IProduct[];
  filterCriteria= [];
  constructor(private router: Router, private productService: ProductService,private location: Location) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.productService.GetAll().subscribe(data => {
      this.products = data;
    }, error => console.log('error in loading the products'));
  }

  getPosts() {
    this.router.navigate(['product', 'products']);
  }
  goBack(): void {
    this.location.back();
  }

}
