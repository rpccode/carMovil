export interface reservation {
    id: string;
    userId: string;
    vehicleId: string;
    startDate: string;
    endDate: string;
    status: string;
    price: number;
}[]


export const reservations = [
    { id: '1', userId: '1', vehicleId: '2', startDate: '2024-09-29 00:00:00', endDate: '2024-09-30 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '2', userId: '1', vehicleId: '3', startDate: '2024-09-29 00:00:00', endDate: '2024-09-30 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '3', userId: '1', vehicleId: '6', startDate: '2024-09-29 00:00:00', endDate: '2024-09-30 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '4', userId: '1', vehicleId: '2', startDate: '2024-10-01 03:15:00', endDate: '2024-10-02 05:30:00', status: 'Reservado', price: 260.00 },
    { id: '5', userId: '1', vehicleId: '2', startDate: '2024-10-03 04:45:00', endDate: '2024-10-04 08:45:00', status: 'Reservado', price: 280.00 },
    { id: '6', userId: '1', vehicleId: '3', startDate: '2024-10-01 00:00:00', endDate: '2024-10-02 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '9', userId: '1', vehicleId: '2', startDate: '2024-11-07 01:00:00', endDate: '2024-11-08 00:00:00', status: 'Reservado', price: 230.00 },
    { id: '10', userId: '1', vehicleId: '6', startDate: '2024-10-07 00:00:00', endDate: '2024-10-08 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '11', userId: '1', vehicleId: '6', startDate: '2024-10-08 00:00:00', endDate: '2024-10-09 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '12', userId: '1', vehicleId: '6', startDate: '2024-10-09 00:00:00', endDate: '2024-10-10 00:00:00', status: 'Reservado', price: 240.00 },
    { id: '13', userId: '1', vehicleId: '7', startDate: '2024-09-01 00:00:00', endDate: '2024-09-18 00:00:00', status: 'Reservado', price: 4080.00 },
  ];