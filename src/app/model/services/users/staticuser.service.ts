import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { User } from '../../entities/user';

@Injectable()
export class StaticuserService {
  private users: User[] = [
     new User({id: 'westresd', firstname: 'john', lastname: 'doe', password: 'test', email: 'johndoe@gmail.com', phone: '09035306621',
     location: {
       address: '',
       city: '',
       country: '',
       zip: ''
     }
    })
  ];

  constructor() { 
  }

  getUsers(): Observable<User[]>{
    return Observable.from([this.users]);
  }

}
