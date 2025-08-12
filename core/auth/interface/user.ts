export interface User {
  id: string;
  email: string;
  image: string;
  password?: string;
  fullName: string;
  role: string;
  token?: string;
}
