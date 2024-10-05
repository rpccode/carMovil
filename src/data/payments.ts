
export interface payment {
    id: string;
    reservationId: string;
    amount: number;
    status: string;
    date: string;
}[]


export const payments:payment[] = [
    { id: '1', reservationId: '9', amount: 230.00, status: 'paid', date: '2024-09-29 23:29:59.743844' },
    { id: '2', reservationId: '10', amount: 240.00, status: 'paid', date: '2024-09-29 23:39:05.728895' },
    { id: '3', reservationId: '11', amount: 240.00, status: 'paid', date: '2024-09-29 23:40:16.556684' },
    { id: '4', reservationId: '12', amount: 240.00, status: 'paid', date: '2024-09-30 14:05:08.340434' },
    { id: '5', reservationId: '13', amount: 4080.00, status: 'paid', date: '2024-09-30 21:08:38.279547' },
  ];