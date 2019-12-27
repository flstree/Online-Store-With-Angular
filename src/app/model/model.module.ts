import { NgModule } from '@angular/core';
import { StaticService } from './services/static.service';
import { RepositoryService } from './services/repository.service';

@NgModule({
  providers: [StaticService, RepositoryService]
})
export class ModelModule {}