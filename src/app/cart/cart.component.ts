import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProducts } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: Array<{ product: IProducts; quantity: number }> = [];
  total: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.cartItems = this.productService.getCartItems();
    console.log(this.cartItems);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce(
      (acc, item) => acc + Number(item.product.price) * item.quantity,
      0
    );

    return this.total;
  }

  removeItem(productId: number) {
    this.productService.removeItem(productId);
    this.cartItems = this.productService.getCartItems();
    this.calculateTotal();
  }
}
