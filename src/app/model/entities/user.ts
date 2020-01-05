export class User {
  id?: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  email?: string;
  location?: {
    address?: string;
    city?: string;
    country?: string;
    zip?: string;
  }
  phone?: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }

  get fullname(){
    return this.firstname + ' ' + this.lastname;
  }
}
