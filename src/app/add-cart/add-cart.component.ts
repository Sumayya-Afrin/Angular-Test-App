import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../app.component';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.scss',
})
export class AddCartComponent implements OnInit {
  cartItems: IProducts[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
  }
}
