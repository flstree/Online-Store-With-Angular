export interface Product {
  id: number;
  name: string;
  category?: string;
  description?: string;
  price?: number;
  discount?: number;
  available?: number;
  state?: string;
  image?: string;
}
