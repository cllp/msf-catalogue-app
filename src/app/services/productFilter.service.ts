import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";
import {IFilter} from "../models/filter";
import {IFilterGroup} from "../models/filter";
import {IFilterItem} from "../models/filter";
import {IProduct} from "../pages/products";

const _FIL_BASE = 'http://localhost:4200/src/api/filter.json';

@Injectable()
export class ProductFilterService extends Service {
private url = _FIL_BASE;
private url2 = 'http://localhost:4200/src/api/product2.json';
    constructor(private http:HttpClient) {super(); }
    GetAllFilters():Observable<IFilterGroup[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    GetFilterCriteria(ProductCategory, FilterGroups):Observable<IProduct[]> {
       //alert(FilterGroups); 
       return this.http.get(this.url2)
            .map(this.extractData)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
}