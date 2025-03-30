export interface Cake {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients?: string[];
  price?: number;
  category?: string;
}