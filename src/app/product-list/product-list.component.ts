import { Component } from '@angular/core';
import { IProducts } from '../app.component';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productList: Array<IProducts> = [];
  isLoading: boolean = true;
  msg = '';
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService
      .getAllProducts()
      .then((data) => {
        console.log('Fetched products:', data); // Add this line
        this.productList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
