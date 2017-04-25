import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductFilterService } from "../../services/productFilter.service";
import { IFilter } from "app/models/filter";
import { IFilterGroup } from "app/models/filter"
import { IFilterItem } from "app/models/filter";
import { IProduct } from '../products';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

export class ProductFilterComponent  {
  filter:IFilter;
  products:IProduct[];
  
  constructor(private productFilterService: ProductFilterService,private productPageComponent:ProductPageComponent) { }

  ngOnInit() {
    this.filter = {"ProductCategory":"Shelter", "FilterGroups":[]};
     this.productFilterService.GetAllFilters().subscribe(data => {
      this.filter.FilterGroups = data
    })
  } 

  // Use this for sending the clicked checkedbox to the API
  updateCheckedFilterCriteria(event) {
    this.getProductFilterCriteria(this.filter.ProductCategory, this.filter.FilterGroups);
  }

  getProductFilterCriteria(ProductCategory, FilterGroups) {
    this.productFilterService.GetFilterCriteria(ProductCategory, FilterGroups).subscribe(data => {
      this.productPageComponent.products = data
    })
  }
}
