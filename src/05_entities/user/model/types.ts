export interface Address {
  city?: string;
  street?: string;
  suite?: string;
  zipcode?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  website?: string;
  address?: Address;
}
