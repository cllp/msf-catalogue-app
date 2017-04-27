import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";
import {IProductDetail} from "../models/product_detail";
import { Http, Response } from '@angular/http';

const _API_BASE = 'http://localhost:5006/api/';
//Do not forget to register the service in the app module in the 'providers' array.
//To use this service just inject it into the constructor of any component.
@Injectable()
export class PDetailService extends Service{
product_detail:IProductDetail;

    constructor(private http:HttpClient) {super(); }
      GetDetails(id:number) {
    return this.http
      .get(_API_BASE+'Product/'+id)
    //   .map((response: Response) =>( response.json()))
    .map(this.extractData)
      .catch(this.handleError);
  }
}