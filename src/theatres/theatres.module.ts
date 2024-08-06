export interface Theatre {
    id: number;
    name: string;
    city: string;
    ticketPrice: number;
    seats: Seat[];
    image: string;
  }
  
  export interface Seat {
    id: number;
    row: string;
    column: number;
    theatreId: number;
  }
  