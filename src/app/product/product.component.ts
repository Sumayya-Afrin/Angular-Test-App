import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { IProducts } from '../app.component';
import { ProductService } from '../product.service';
import { AppComponent } from '../app.component';
import { CartService } from '../cart.service';

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
  @Input() products!: IProducts;
  constructor(private cartService: CartService) {}

  isLoading: boolean = true;
  msg = '';

  show = true;

  showDescription() {
    this.show = this.show ? false : true;
  }

  AddingToCart() {
    this.cartService.addToCart(this.products);
  }
}
