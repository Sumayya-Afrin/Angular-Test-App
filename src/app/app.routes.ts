import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
];
