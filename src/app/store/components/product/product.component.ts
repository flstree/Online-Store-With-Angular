import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  actualPrice: number;

  constructor() { }

  ngOnInit() {
    if(this.product.discount > 0){
      this.actualPrice = this.product.price - (this.product.discount/100 * this.product.price);
    }else{
      this.actualPrice = this.product.price;
    }
  }

}
