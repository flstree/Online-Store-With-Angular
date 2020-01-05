export interface User {
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
}
