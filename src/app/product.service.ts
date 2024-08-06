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

  async placeOrder(): Promise<any> {
    const orders = this.cart.map((item) => ({
      product_name: item.product.name,
      image_url: item.product.product_url,
      date: new Date().toISOString().split('T')[0], // Current date
      quantity: item.quantity,
    }));

    try {
      // Post the order data to MockAPI
      const response = await fetch(
        'https://66b0accb6a693a95b539b9bd.mockapi.io/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orders),
        }
      );
      return response.json(); // Return the response
    } catch (error) {
      console.error('Error placing order:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }
}
