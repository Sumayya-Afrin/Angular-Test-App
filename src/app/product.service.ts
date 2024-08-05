import { Injectable } from '@angular/core';
import { IProducts } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cart: Array<{ product: IProducts; quantity: number }> = [];

  constructor() {}

  getProductsIdP(id: string): Promise<IProducts> {
    return fetch(
      `https://66b0accb6a693a95b539b9bd.mockapi.io/productss/${id}`
    ).then((res) => res.json());
  }

  getAllProducts(): Promise<IProducts[]> {
    return fetch('https://66b0accb6a693a95b539b9bd.mockapi.io/productss').then(
      (res) => res.json()
    );
  }

  addCart(product: IProducts) {
    console.log('adding');
    const item = this.cart.find((p) => product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  getCartItems(): Array<{ product: IProducts; quantity: number }> {
    return this.cart;
  }

  // Remove a product from the cart
  // removeItem(productId: string) {
  //   this.cart = this.cart.filter((item) => item.product.id !== productId);
  // }
}
