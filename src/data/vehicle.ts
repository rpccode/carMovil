import { reservations } from "./reservations";
import reservation from '../app/(tabs)/reservation';

export interface Vehicle {
  id: string;
    code: string;
    status: string // Assuming status is one of these two values
    brand: string;
    model: string;
    lat: number;
    lon: number;
  }
  

export const vehiclesList = [
  { id: '7', code: 'STU901', brand: 'Audi', model: 'A4', status: 'disponible', lat: 35.689487, lon: 139.691711 },
  { id: '8', code: 'VWX234', brand: 'Mercedes', model: 'C-Class', status: 'disponible', lat: 52.520008, lon: 13.404954 },
  { id: '5', code: 'MNO345', brand: 'Chevrolet', model: 'Camaro', status: 'disponible', lat: 48.856613, lon: 2.352222 },
  { id: '4', code: 'JKL012', brand: 'Tesla', model: 'Model S', status: 'disponible', lat: 37.774929, lon: -122.419418 },
  { id: '1', code: 'ABC123', brand: 'Toyota', model: 'Corolla', status: 'en uso', lat: 40.712776, lon: -74.005974 },
  { id: '3', code: 'GHI789', brand: 'Ford', model: 'Mustang', status: 'reservado', lat: 51.507351, lon: -0.127758 },
  { id: '2', code: 'DEF456', brand: 'Honda', model: 'Civic', status: 'reservado', lat: 34.052235, lon: -118.243683 },
  { id: '6', code: 'PQR678', brand: 'BMW', model: 'X5', status: 'reservado', lat: 55.755825, lon: 37.617298 },
];

export const getVehicleBrandAndModel = (id: string): string  => {
  const vehicle = vehiclesList.find(v => v.id === id);
  
  // Si se encuentra el vehículo, retornar marca y modelo
  if (vehicle) {
    return `${vehicle.brand} ${vehicle.model}`;
  }

  // Si no se encuentra, retornar null
  return 'N/A';
};

export const getVehicleBrandAndModelByReservation = (id: string): string  => {
  const reservation = reservations.find(v => v.id === id);
  const vehicle = vehiclesList.find(v => v.id === reservation?.vehicleId);
  
  // Si se encuentra el vehículo, retornar marca y modelo
  if (vehicle) {
    return `${vehicle.brand} ${vehicle.model}`;
  }

  // Si no se encuentra, retornar null
  return 'N/A';
};