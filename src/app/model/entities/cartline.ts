import { Product } from "../../interfaces/product";

export class CartLine {
  product?: Product;
  quantity?: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }

  get total(){
    return this.quantity * this.product.price;
  }

  get price(){
    if(this.product.discount > 0){
      return this.product.price - (this.product.discount/100 * this.product.price);
    }
    
    return this.product.price;
  }
  
}