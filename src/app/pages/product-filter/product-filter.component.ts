import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductFilterService } from "../../services/productFilter.service";
import { IFilter } from "app/models/filter";
import { IProduct } from '../products';

import {ProductPageComponent} from '../product-page/product-page.component';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

export class ProductFilterComponent  {
  filters:IFilter[];
  products:IProduct[];

  filterCriteria = {"ProductCategory":"Shelter", "FilterGroups":[]};
  
  constructor(private productFilterService: ProductFilterService) { }

  ngOnInit() {
     this.productFilterService.GetAllFilters().subscribe(data => {
      this.filters = data;
    }, error => console.log('error in loading the products'));
  } 

  // Use this for sending the clicked checkedbox to the API
  /*updateCheckedFilterCriteria(filter,filteritem,event) {
    if(event.target.checked) {
      this.filterCriteria.FilterGroups.push({"ProductGroupId":filter,"FilterCriteria":filteritem});
    }
    else if (!event.target.checked){
      let indexx = this.filterCriteria.FilterGroups.indexOf(filter,filteritem);
      this.filterCriteria.FilterGroups.splice(indexx,1);
    }
    this.getProductFilterCriteria(this.filterCriteria);
  }

    getProductFilterCriteria(filterCriteria) {
        this.productFilterService.GetFilterCriteria(JSON.stringify(this.filterCriteria));
    }*/
}
