import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/entities/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  @Input() pages;
  @Input() selectedPage: number;
  @Input() perPage: number;
  @Input() productsTotal: number;

  @Output() changePage = new EventEmitter;
  @Output() changePerPage = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  getCurrentItemsNumber(){
    const itemNums = this.selectedPage * this.perPage;
    return (itemNums > this.productsTotal) ? this.productsTotal : itemNums;
  }

  emitChangePage(page){
    this.changePage.emit(page);
  }

  emitChangePerPage(perPage){
    this.changePerPage.emit(perPage);
  }

}
