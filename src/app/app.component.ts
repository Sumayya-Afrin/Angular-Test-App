import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export interface IProducts {
  name: string;
  product_url: string;
  price: number;
  product_description: string;
  quantity: number;
  id: number;
}

export interface IOrders {
  order_id: number;
  product_name: string;
  image_url: string;
  date: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test-app';
}
