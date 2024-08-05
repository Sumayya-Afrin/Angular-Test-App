import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { IProducts } from '../app.component';
import { ProductService } from '../product.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
    MatBadgeModule,
    RouterLink,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    public router: Router
  ) {}
  @Output() addItemEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() products!: IProducts;

  isLoading: boolean = true;
  msg = '';

  show = true;

  showDescription() {
    this.show = this.show ? false : true;
  }

  addToCart() {
    console.log('clicking');
    this.productService.addCart(this.products);
    console.log('navigate');
  }
}
