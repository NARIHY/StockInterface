import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './utils/not-found-component/not-found-component';
import { GuestComponent } from './guest/guest-component/guest-component';
import { StockManagementComponent } from './dashboard/stock-management-component/stock-management-component';
import { CategoryManagementComponent } from './dashboard/category-management-component/category-management-component';
import { ProductManagementComponent } from './dashboard/product-management-component/product-management-component';

const routes: Routes = [
  // home
  {path: '', component: GuestComponent},
  {path: 'stock-managements', component:StockManagementComponent},
  {path: 'categories', component: CategoryManagementComponent},
  {path: 'products', component: ProductManagementComponent},
  // Not found
  {path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
