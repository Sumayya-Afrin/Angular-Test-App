import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { IProducts } from '../app.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
    MatBadgeModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products!: IProducts;

  isLoading: boolean = true;
  msg = '';

  show = true;

  showDescription() {
    this.show = this.show ? false : true;
  }
}
