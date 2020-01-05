import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Order } from './orders/order.model';

@Injectable()
export class StaticService {
  private products: Product[] = [
    new Product({id: 1, name: "HP Compaq Presario", category: "laptops", description: "Product 1 (Category 1)", price: 100, available: 10, discount: 10, image: '/assets/img/product01.png', state: 'new', rating: 2}),
    new Product({id: 2, name: "HP Folio", category: "laptops", description: "Product 2 (Category 1)", price: 100, available: 3, discount: 30, image: '/assets/img/product03.png', state: 'new', rating: 3}),
    new Product({id: 3, name: "Dell Latitude", category: "laptops", description: "Product 3 (Category 1)", price: 100, available: 1, discount: 30, image: '/assets/img/product03.png', state: 'uk used', rating: 1}),
    new Product({id: 4, name: "HP Ultimate", category: "laptops", description: "Product 4 (Category 1)", price: 100, available: 5, discount: 30, image: '/assets/img/product03.png', state: 'us used'}),
    new Product({id: 5, name: "Samsung Galaxy A20", category: "smartphones", description: "Product 5 (Category 1)", price: 100, available: 3, discount: 30, image: '/assets/img/product07.png', state: 'old', rating: 1}),
    new Product({id: 6, name: "Samsung Galaxy A10", category: "smartphones", description: "Product 6 (Category 2)", price: 100, available: 8, discount: 30, image: '/assets/img/product07.png', state: 'new'}),
    new Product({id: 7, name: "Canon D9", category: "cameras", description: "Product 7 (Category 2)", price: 100, available: 15, discount: 0, image: '/assets/img/product09.png', state: 'new'}),
    new Product({id: 8, name: "Nikon XR", category: "cameras", description: "Product 8 (Category 2)", price: 100, available: 5, discount: 30, image: '/assets/img/product09.png', state: 'new'}),
    new Product({id: 9, name: "IPhone 7+", category: "smartphones", description: "Product 9 (Category 2)", price: 100, available: 4, discount: 30, image: '/assets/img/product07.png', state: 'new'}),
    new Product({id: 10, name:"Nokia E8", category: "smartphones", description: "Product 10 (Category 2)", price: 100, available: 7, discount: 0, image: '/assets/img/product07.png', state: 'new', rating: 2}),
    new Product({id: 11, name: "Lenovo Mini", category: "laptops", description: "Product 11 (Category 3)", price: 100, available: 10, discount: 10, image: '/assets/img/product03.png', state: 'new'}),
    new Product({id: 12, name: "HP ZBook", category: "laptops", description: "Product 12 (Category 3)", price: 100, available: 5, discount: 30, image: '/assets/img/product03.png', state: 'new'}),
    new Product({id: 13, name: "Alienware 17 R2", category: "laptops", description: "Product 13 (Category 3)", price: 100, available: 9, discount: 30, image: '/assets/img/product03.png', state: 'new'}),
    new Product({id: 14, name: "HP Pavilion", category: "laptops", description: "Product 14 (Category 3)", price: 100, available: 3, discount: 30, image: '/assets/img/product03.png', state: 'new'}),
    new Product({id: 15, name: "Infinix Note 7", category: "smartphones", description: "Product 15 (Category 3)", price: 100, available: 4, discount: 30, image: '/assets/img/product07.png', state: 'new'})
  ];

  constructor() { 
  }

  getProducts(): Observable<Product[]>{
    return Observable.from([this.products]);
  }

  saveOrder(order: Order): Observable<Order>{
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }

}
