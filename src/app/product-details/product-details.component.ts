import { Component } from '@angular/core';
import { IProducts } from '../app.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  products!: IProducts;
  isLoading: boolean = true;
  msg = '';
}
