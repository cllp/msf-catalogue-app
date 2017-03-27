import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, Params} from "@angular/router";


// This middleware should be used in the routes you want to guard due to access clearence.

@Injectable()
export class AdminAuthGuardService implements CanActivate{


    canActivate(route: ActivatedRouteSnapshot){
      // your logic to determine if the navigation request is good to go.
      // return false or true if you want to pass or not.
        return true;
    }
    constructor(private router:Router) { }

}
