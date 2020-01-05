import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/entities/product';
import { CartService } from '../../../model/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  actualPrice: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    if(this.product.discount > 0){
      this.actualPrice = this.product.price - (this.product.discount/100 * this.product.price);
    }else{
      this.actualPrice = this.product.price;
    }
  }

  addProductToCart(product: Product){
    this.cart.add(product);
  }

  gotoView(id: number){
    
  }

}
