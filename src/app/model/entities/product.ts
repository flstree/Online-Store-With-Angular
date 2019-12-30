export class Product {
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  price?: number;
  available?: number;
  discount?: number;
  state?: string;
  image?: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
