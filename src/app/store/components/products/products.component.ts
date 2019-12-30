import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/entities/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  @Input() pages: number[];
  @Input() selectedPage: number;
  @Output() changePage = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitChangePage(page){
    this.changePage.emit(page);
  }

}
