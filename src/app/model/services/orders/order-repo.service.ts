import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { StaticService } from '../static.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private datasource: StaticService){}

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.datasource.saveOrder(order);
  }
  
}
