import { Seat } from "src/theatres/theatres.module";
export interface Reservation {
    id: number;
    data: Date;
    startAt: Date;
    seats: Seat[];
    orderId: number;
    ticketPrice: number;
    total: number;
    movieId: number;
    theatreId: number;
    name: string;
    phone: string;
  }
  