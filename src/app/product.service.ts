import { Injectable } from '@angular/core';
import { IOrders, IProducts } from './app.component';

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
    const item = this.cart.find((p) => p.product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    console.log(this.cart);
  }

  getCartItems(): Array<{ product: IProducts; quantity: number }> {
    console.log('getting cart items');
    console.log(this.cart);
    return this.cart;
  }

  removeItem(productId: number) {
    this.cart = this.cart.filter((item) => item.product.id !== productId);
  }

  placeOrder(): Promise<IOrders[]> {
    return fetch('https://66b0accb6a693a95b539b9bd.mockapi.io/orders').then(
      (res) => res.json()
    );
  }
}
