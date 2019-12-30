import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable()
export class CartService {
  cart: Product[];

  constructor() {}

  addProduct(product: Product){
    this.cart.push(product);
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  removeProduct(productId: number){
    this.cart = this.cart.filter(item => item.id != productId);
  }

}
