import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownModule } from "ngx-dropdown";
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { APP_ROUTES } from "./routes/routes";
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Service } from "./services/service";
import { HttpClient } from "./services/http-client.service";
import { AdminAuthGuardService } from "./services/admin-auth-gurad.service";
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductService } from "./services/product.service";
import { LoginPageComponent } from "./authentication/login-page/login-page.component";
import { LoggedInPageComponent } from "./authentication/logged-page/logged-page.component";
import { AlertModule } from 'ng2-bootstrap';
import { AuthService} from "./services/auth.service";
import { MenuPageComponent} from "./pages/menu-page/menu-page.component";
import { ProductFilterComponent } from './pages/product-filter/product-filter.component';

import { ProductFilterService } from './services/productFilter.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoggedInPageComponent,
    MenuPageComponent,
    ProductPageComponent,
    ProductDetailsPageComponent,
    ProductFilterComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule
  ],
  //All services should be registered here
  providers: [
    Service,
    HttpClient , //should be replaced with AuthHttp if you are using jwt-auth
    AdminAuthGuardService,
    ProductService,
    AuthService,
    ProductFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }