import { Injectable } from '@angular/core';
import {Service} from "./service";
import {HttpClient} from "./http-client.service";
import {Observable} from "rxjs/Rx";

const _API_BASE = 'https://jsonplaceholder.typicode.com/users/?username=';
let profile = JSON.parse(localStorage.getItem("userProfile"));

//Do not forget to register the service in the app module in the 'providers' array.
//To use this service just inject it into the constructor of any component.
@Injectable()
export class FakeService extends Service{

    constructor(private http:HttpClient) {super(); }

    //A method to fetch all posts and it will return observable to subscribe to and read the data.
    getPosts():Observable<any>{
        let url = _API_BASE+profile["name"];
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPost(id):Observable<any>{
      let url = _API_BASE+'posts/'+id;
      return this.http.get(url)
        .map(this.extractData)
        .catch(this.handleError);
    }

}
