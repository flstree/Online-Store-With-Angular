import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../../model/services/repository.service';
import { CartService } from '../../../model/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contact: Object = {};
  categories: string[];

  constructor(private datasource: RepositoryService, public cart: CartService) { 
    this.contact = {
      phone: "+021-95-51-84",
      email: "email@email.com",
      location: "1734 Stonecoal Road",
    }

    this.categories = this.datasource.getCategories();
  }

  ngOnInit() {
  }

}
