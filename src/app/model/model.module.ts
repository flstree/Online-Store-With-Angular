import { NgModule } from '@angular/core';
import { StaticService } from './services/static.service';
import { RepositoryService } from './services/repository.service';
import { CartService } from './services/cart.service';
import { UserRepositoryService } from './services/users/userRepo.service';
import { StaticuserService } from './services/users/staticuser.service';
import { Order } from './services/orders/order.model';
import { OrderRepository } from './services/orders/order-repo.service';

@NgModule({
  providers: [StaticService, RepositoryService, CartService, UserRepositoryService, StaticuserService, Order, OrderRepository]
})
export class ModelModule {}