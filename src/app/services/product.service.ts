import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";
import {IProduct} from "app/models/products";
const _API_BASE = 'http://localhost:5006/api/';


@Injectable()
export class ProductService extends Service{
posts:IProduct[]
    constructor(private http:HttpClient) {super(); }

    //A method to fetch all posts and it will return observable to subscribe to and read the data.
    GetAll():Observable<IProduct[]>{
        let url = _API_BASE+'product';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    Get(id:number):Observable<any>{
      let url = _API_BASE;
      return this.GetAll()
        .map((posts: any[]) => posts.find(p => p.productId === id))
        .catch(this.handleError);
    }

}