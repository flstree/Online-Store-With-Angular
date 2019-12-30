import { Component, OnInit } from '@angular/core';
import { Product } from '../model/entities/product';
import { RepositoryService } from '../model/services/repository.service';

@Component({
  selector: 'app-store',
  moduleId: module.id,
  templateUrl: './store.component.html',
  styleUrls: []
})
export class StoreComponent implements OnInit {
  public checkList: string[] = [];
  public products: Product[];

  /* Pagination */
  public productsPerPage: number = 6;
  public selectedPage: number = 1;

  constructor(private repository: RepositoryService){
    this.renderProducts();
  }

  ngOnInit(){
    
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string, event?){
    if(event.target.checked){
      this.checkList.push(newCategory);
    }else{
      for(let i=0;i< this.categories.length; i++){
        if(this.checkList[i] == newCategory){
          this.checkList.splice(i,1);
        }
      }
    }

    this.renderProducts();
  }

  renderProducts(){
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    if(this.checkList.length < 1){
      this.products = this.repository.getProducts().slice(pageIndex, pageIndex + this.productsPerPage);
      return;
    }

    this.checkList.forEach((cat, index)=>{
      const items = this.repository.getProducts(cat);
      if(index == 0){
        this.products = items;
      }else{
        this.products.push(...items);
      }
    });
    this.products = this.products.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePage(newPage?: number){
    this.selectedPage = newPage;
    this.renderProducts();
  }

  changePageSize(newSize?: number){
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts().length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }
}