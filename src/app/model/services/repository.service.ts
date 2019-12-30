import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { StaticService } from './static.service';

@Injectable()
export class RepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private datasource: StaticService) {
    this.datasource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

  getProducts(category: string = null): Product[] {
    return this.products.filter(p => category == null || category == p.category);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

}
