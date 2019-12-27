import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticService {
  private products: Product[] = [
    new Product({id: 1, name: "Product 1", category: "Category 1", description: "Product 1 (Category 1)", price: 100}),
    new Product({id: 2, name: "Product 2", category: "Category 1", description: "Product 2 (Category 1)", price: 100}),
    new Product({id: 3, name: "Product 3", category: "Category 1", description: "Product 3 (Category 1)", price: 100}),
    new Product({id: 4, name: "Product 4", category: "Category 1", description: "Product 4 (Category 1)", price: 100}),
    new Product({id: 5, name: "Product 5", category: "Category 1", description: "Product 5 (Category 1)", price: 100}),
    new Product({id: 6, name: "Product 6", category: "Category 2", description: "Product 6 (Category 2)", price: 100}),
    new Product({id: 7, name: "Product 7", category: "Category 2", description: "Product 7 (Category 2)", price: 100}),
    new Product({id: 8, name: "Product 8", catgeory: "Category 2", description: "Product 8 (Category 2)", price: 100}),
    new Product({id: 9, name: "Product 9", category: "Category 2", description: "Product 9 (Category 2)", price: 100}),
    new Product({id: 10, name:"Product 10", category: "Category 2", description: "Product 10 (Category 2)", price: 100}),
    new Product({id: 11, name: "Product 11", category: "Category 3", description: "Product 11 (Category 3)", price: 100}),
    new Product({id: 12, name: "Product 12", category: "Category 3", description: "Product 12 (Category 3)", price: 100}),
    new Product({id: 13, name: "Product 13", category: "Category 3", description: "Product 13 (Category 3)", price: 100}),
    new Product({id: 14, name: "Product 14", category: "Category 3", description: "Product 14 (Category 3)", price: 100}),
    new Product({id: 15, name: "Product 15", category: "Category 3", description: "Product 15 (Category 3)", price: 100})
  ];

  constructor() { 
  }

  getProducts(): Observable<Product[]>{
    return Observable.from([this.products]);
  }

}
