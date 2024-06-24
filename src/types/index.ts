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

export interface StationDto extends Station {
  vehicleList: Vehicle[]
}

export enum VehicleType {
  scooter = "Scooter",
  bike = "Bike"
}

export interface Vehicle {
  id: number;
  name: string;
  type: VehicleType;
  imageUrl: string;
  battery: number;
  inUse: boolean;
  currentStationId: number;
  argoPrice: number;
  currentCoordinates: Coordinates;
}