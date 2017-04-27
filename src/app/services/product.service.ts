import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";
//import {IProduct} from "../models/products";

const _API_BASE = 'http://localhost:5006/api/';
//Do not forget to register the service in the app module in the 'providers' array.
//To use this service just inject it into the constructor of any component.
@Injectable()
export class ProductService extends Service{
posts:any[]
    constructor(private http:HttpClient) {super(); }

    //A method to fetch all posts and it will return observable to subscribe to and read the data.
    GetAll():Observable<any[]>{
        let url = _API_BASE+'Product';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    Get(id:number):Observable<any>{
      let url = _API_BASE;
      return this.GetAll()
        .map((products: any[]) => products.find(p => p.ProductID === id))
        .catch(this.handleError);
    }


}