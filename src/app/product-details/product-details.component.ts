import { Component } from '@angular/core';
import { IProducts } from '../app.component';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  products!: IProducts;
  isLoading: boolean = true;
  msg = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.productService
      .getProductsIdP(id)
      .then((data) => {
        this.products = data; // Model
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
