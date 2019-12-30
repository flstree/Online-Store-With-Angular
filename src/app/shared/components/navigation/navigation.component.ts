import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navs: string[];

  constructor() { 
    this.navs = [
      'home', 'hot deals', 'categories', 'laptops', 'smartphones', 'cameras', 'accessories'
    ];
  }

  ngOnInit() {
  }

}
