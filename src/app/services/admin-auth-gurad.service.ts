﻿import { Injectable } from '@angular/core';
import { HttpClient } from "./http-client.service";
import {CanActivate, Router, ActivatedRouteSnapshot, Params} from "@angular/router";
import {AuthService} from "app/services/auth.service";
// This middleware should be used in the routes you want to guard due to access clearence.

@Injectable()
export class AdminAuthGuardService implements CanActivate{
    constructor(private authService: AuthService, private router: Router,private http: HttpClient) { }
    canActivate() {
        this.authService.endSigninMainWindow();
        //this.router.navigate(['pages/product']);
        return true;
    } 
}
