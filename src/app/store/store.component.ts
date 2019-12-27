import { Component } from '@angular/core';
import { Product } from '../model/entities/product';
import { RepositoryService } from '../model/services/repository.service';

@Component({
  selector: 'app-store',
  moduleId: module.id,
  templateUrl: './store.component.html',
  styleUrls: []
})
export class StoreComponent {
  public selectedCategory: string = null;
  constructor(private repository: RepositoryService){}

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }
}