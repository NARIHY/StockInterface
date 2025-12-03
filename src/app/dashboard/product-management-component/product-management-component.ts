import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../rest';

@Component({
  selector: 'app-product-management-component',
  standalone: false,
  templateUrl: './product-management-component.html',
  styleUrl: './product-management-component.scss',
})
export class ProductManagementComponent implements OnInit{

  products : Product[] = [];
  
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  

  getAllProducts(): void {
    this.productService.apiProductsGet().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
