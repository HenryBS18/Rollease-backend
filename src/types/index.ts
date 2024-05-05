export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  birthdate: Date;
}

export interface UserPayload {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
}