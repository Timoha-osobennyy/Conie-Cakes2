import React from "react";
import { Link } from "react-router-dom";
import { Cake } from "@/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Instagram, Eye } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

interface CakeCardProps {
  cake: Cake;
}

export function CakeCard({ cake }: CakeCardProps) {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(cake);
  };
  
  const openInstagramMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    const username = 'Conie_cakes';
    const message = `Hello, I would like to order the ${cake.name}.`;
    const url = `https://www.instagram.com/direct/t/${username}/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <Link to={`/cake/${cake.id}`} className="cake-item group">
      <div className="relative overflow-hidden">
        <img 
          src={cake.image} 
          alt={cake.name} 
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            Подробнее
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{cake.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{cake.description}</p>
        
        <div className="flex gap-2 mt-auto">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 flex items-center justify-center gap-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            В корзину
          </Button>
          
          <Button 
            size="sm" 
            className="flex-1 flex items-center justify-center gap-1"
            onClick={openInstagramMessage}
          >
            <Instagram className="h-4 w-4" />
            Заказать
          </Button>
        </div>
      </div>
    </Link>
  );
}