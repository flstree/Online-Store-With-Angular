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
  public productsPerPage: number = 9;
  public selectedPage: number = 1;
  public pageCount;
  public totalProducts: number = 0;

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
    this.changePage(1);
  }

  renderProducts(){
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    let items;

    if(this.checkList.length < 1){
      items = this.repository.getProducts();
      this.totalProducts = items.length;
      this.pageCount =  Math.ceil(items.length / this.productsPerPage);
      this.products = items.slice(pageIndex, pageIndex + this.productsPerPage);
      return;
    }

    this.checkList.forEach((cat, index)=>{
      items = this.repository.getProducts(cat);
      this.totalProducts = items.length;
      if(index == 0){
        this.products = items;
      }else{
        this.products.push(...items);
      }
    });
    this.pageCount =  Math.ceil(this.products.length / this.productsPerPage);
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
}