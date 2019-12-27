export class Product {
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  price?: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
