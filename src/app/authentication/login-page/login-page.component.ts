import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    //This is a method that you can use in the html.
    goToProducts() {
        //Notice the router instance how it was loaded in the constructor.
        //That apply to all services. No need to use 'new' keyword to instatiate an object.
        this.router.navigate(['login']);
    }

}
