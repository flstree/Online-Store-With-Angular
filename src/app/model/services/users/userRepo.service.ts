import { Injectable } from '@angular/core';
import { User } from '../../entities/user';
import { StaticuserService } from './staticuser.service';

@Injectable()
export class UserRepositoryService {
  private users: User[] = [];

  constructor(private datasource: StaticuserService) {
    this.datasource.getUsers().subscribe(data => {
      this.users = data;
    });
   }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    return this.users.find(u => u.id == id);
  }

}
