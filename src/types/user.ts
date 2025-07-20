// write your user types here
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}
