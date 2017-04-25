import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";
import {IFilter} from "../models/filter";
import {IFilterGroup} from "../models/filter";
import {IFilterItem} from "../models/filter";
import {IProduct} from "../pages/products";

const _URL_BASE = 'http://localhost:5006/api';

@Injectable()
export class ProductFilterService extends Service {
private filterLayoutUrl = _URL_BASE+'/filter';
private filterUrl = 'http://localhost:5006/api/product/';
    constructor(private http:HttpClient) {super(); }
    GetAllFilters():Observable<IFilterGroup[]> {
        return this.http.get(this.filterLayoutUrl)
            .map(this.extractData)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    GetFilterCriteria(ProductCategory, FilterGroups):Observable<IProduct[]> {
       return this.http.post(this.filterUrl +ProductCategory+'/filterJson/',FilterGroups)
            .map(this.extractData)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
}