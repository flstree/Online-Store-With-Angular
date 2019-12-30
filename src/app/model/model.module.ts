import { NgModule } from '@angular/core';
import { StaticService } from './services/static.service';
import { RepositoryService } from './services/repository.service';
import { CartService } from './services/cart.service';

@NgModule({
  providers: [StaticService, RepositoryService, CartService]
})
export class ModelModule {}