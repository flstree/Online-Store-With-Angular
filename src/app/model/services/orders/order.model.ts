import { Injectable } from '@angular/core';
import { CartService } from '../cart.service';
import { CartLine } from '../../entities/cartline';

@Injectable()
export class Order {
  public id?: number;
  public name?: string;
  public address?: string;
  public city?: string;
  public state?: string;
  public country?: string;
  public zip?: string;
  /* public cart?: {
    lines?: CartLine[],
    itemCount?: Number,
    cartPrice?: Number
  } */
  public shipped?: boolean = false;

  constructor(public _cart: CartService){}

  clear(){
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this._cart.clear();
  }
  
}

