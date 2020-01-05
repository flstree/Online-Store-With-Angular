import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { CounterDirective } from '../shared/directives/counter.directive';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [StoreComponent, ProductComponent, ProductsComponent, CounterDirective, CartDetailComponent, CheckoutComponent, StoreDetailComponent],
  exports: [StoreComponent]
})
export class StoreModule {}