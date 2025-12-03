import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './utils/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './utils/not-found-component/not-found-component';
import { LoaderComponent } from './utils/loader-component/loader-component';
import { GuestComponent } from './guest/guest-component/guest-component';
import { CategoryManagementComponent } from './dashboard/category-management-component/category-management-component';
import { StockManagementComponent } from './dashboard/stock-management-component/stock-management-component';
import { ProductManagementComponent } from './dashboard/product-management-component/product-management-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    NotFoundComponent,
    LoaderComponent,
    GuestComponent,
    CategoryManagementComponent,
    StockManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
