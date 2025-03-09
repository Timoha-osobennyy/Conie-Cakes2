export interface CakeProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  ingredients: string[];
}

export interface CartItem {
  id: string;
  cakeId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
