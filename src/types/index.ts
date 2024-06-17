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

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Station {
  id: number;
  name: string;
  coordinates: Coordinates;
  imageUrl: string;
}