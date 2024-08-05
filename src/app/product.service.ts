import { Injectable } from '@angular/core';
import { IProducts } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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
}
