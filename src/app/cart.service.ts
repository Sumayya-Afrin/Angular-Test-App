import { Injectable } from '@angular/core';
import { IProducts } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProducts[] = [];
  constructor() {}
  addToCart(product: IProducts): void {
    this.cart.push(product);
  }

  getCartItems(): IProducts[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + parseFloat(item.price), 0);
  }
}
