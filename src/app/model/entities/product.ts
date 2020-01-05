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
  rating?: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }

  getRating(){
    if(this.rating == null || this.rating == undefined || this.rating == 0) return;
    return Array(this.rating);
  }
}
