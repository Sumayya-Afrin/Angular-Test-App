import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { IProducts } from '../app.component';
import { ProductService } from '../product.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
    MatBadgeModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // @Input() products = {
  // id: 1,
  //   name: 'Wireless Mouse',
  //   product_url: 'https://example.com/product1',
  //   price: 19.99,
  //   product_description: 'A high-quality wireless mouse with ergonomic design.',
  // };
  @Input() products!: IProducts;

  isLoading: boolean = true;
  msg = '';

  show = true;

  showDescription() {
    this.show = this.show ? false : true;
  }

  AddingToCart() {}
}
