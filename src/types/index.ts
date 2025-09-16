export interface Venue {
  id: number;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  area: string;
}

export interface ReservationFormData {
  name: string;
  date: string;
  time: string;
  venue: string;
}
