import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";
import {IFilter} from "../models/filter";
import {IProduct} from "../pages/products";

const _FIL_BASE = 'http://localhost:4200/src/api/filter.json';

@Injectable()
export class ProductFilterService extends Service{
posts:IFilter[]
private url = _FIL_BASE;
    constructor(private http:HttpClient) {super(); }
    GetAllFilters():Observable<IFilter[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    GetFilterCriteria(filterCriteria: any) {
        //request()
        alert("Hello"+ filterCriteria);
    }
}