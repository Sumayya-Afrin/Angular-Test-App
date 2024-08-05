import { Injectable } from '@angular/core';
import { IProducts } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cart: IProducts[] = [];
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
