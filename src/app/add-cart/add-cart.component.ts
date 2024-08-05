import { Component, Input } from '@angular/core';
import { IProducts } from '../app.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.scss',
})
export class AddCartComponent {
  @Input() product!: IProducts;

  constructor(private productservice: ProductService) {}

  addToCart() {
    //this.productservice.addToCart(this.product);
  }
}
