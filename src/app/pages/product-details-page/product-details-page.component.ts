
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import { ProductService } from "../../services/product.service";
import { AuthService } from "app/services/auth.service";
import { Subscription }       from 'rxjs/Subscription';
//import {IProduct} from '../../models/products';
import {PDetailService} from "../../services/productdetail.service"


declare let jsPDF;

@Component({
  selector: 'app-products-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})


export class ProductDetailsPageComponent implements OnInit {
  profile = JSON.parse(localStorage.getItem("userProfile"));
  username = this.profile["name"];
  pageTitle: string = 'productdetails';
  product_detail:any;
  errorMessage: string;
  private sub: Subscription;
  constructor(private _route: ActivatedRoute,
    private _detailsService: PDetailService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.GetDetails(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  GetDetails(id: number) {
    this._detailsService.GetDetails(id).subscribe(
      product => {this.product_detail = product[0]; },
      error => this.errorMessage = <any>error);
  }
   startSignoutMainWindow() {
    localStorage.clear();
    this.authService.startSignoutMainWindow();
  }

  
  

public createPDF () {
var imgnew = new Image();
imgnew.addEventListener('load', function() {
    var doc = new jsPDF();
    doc.setFontType('bold');
    doc.text(20, 20, 'Name: ' + imgnew.name);
    doc.text(20, 30, 'OverallRating: ' + imgnew.title);
    doc.text(20, 40, 'Name In Folder: ' + imgnew.textContent);
    doc.text(20, 50, 'Code: ' + imgnew.alt);
    doc.addImage(imgnew, 'jpg', 20, 70);
    doc.save(imgnew.name + '.pdf');
});
imgnew.src = 'assets/'+this.product_detail.imageFile[0].ProductFileName;
imgnew.name = this.product_detail.ProductName;
imgnew.title = this.product_detail.OverallRating;
imgnew.textContent = this.product_detail.imageFile[0].ProductFileName;
imgnew.alt = this.product_detail.ProductID;
}
}
