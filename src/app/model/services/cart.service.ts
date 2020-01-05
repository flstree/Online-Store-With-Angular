import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { CartLine } from '../entities/cartline';

@Injectable()
export class CartService {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  add(product: Product, quantity: number = 1){
    let line = this.lines.find(line => line.product.id == product.id);
    if(line != undefined){
      line.quantity += quantity;
    }else{
      this.lines.push(new CartLine({product, quantity}));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number){
    let line = this.lines.find(line => line.product.id == product.id);
    if(line != undefined){
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  remove(id: number){
    let index = this.lines.findIndex(line => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear(){
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate(){
    this.itemCount = 0;
    this.cartPrice = 0;

    this.lines.forEach((line) => {
      this.itemCount += line.quantity;
      this.cartPrice += (line.quantity * line.price);
    });
  }

}
