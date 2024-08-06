import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IOrders } from '../app.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orders: Array<{
    order_id: number;
    product_name: string;
    image_url: string;
    date: string;
    quantity: number;
  }> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.orders = navigation?.extras?.state?.['orders'] || [];
  }
}
