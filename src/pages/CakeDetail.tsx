import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Instagram, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cakes } from "@/data/cakes";
import { useCart } from "@/hooks/use-cart";

export default function CakeDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const cake = cakes.find((cake) => cake.id === id);

  if (!cake) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Торт не найден</h2>
        <Link to="/#cakes" className="text-primary hover:underline mt-4 inline-block">
          Вернуться к списку тортов
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(cake);
  };

  const openInstagramMessage = () => {
    const username = 'Conie_cakes';
    const message = `Hello, I would like to order the ${cake.name}.`;
    const url = `https://www.instagram.com/direct/t/${username}/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <Link to="/#cakes" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад к списку тортов
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={cake.image} 
            alt={cake.name} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{cake.name}</h1>
          <div className="prose max-w-none mb-6">
            <p className="text-lg">{cake.description}</p>
          </div>
          
          {cake.ingredients && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Ингредиенты:</h3>
              <ul className="list-disc pl-5">
                {cake.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              onClick={handleAddToCart}
              className="flex items-center gap-2"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5" />
              Добавить в корзину
            </Button>
            
            <Button 
              onClick={openInstagramMessage}
              variant="outline" 
              className="flex items-center gap-2"
              size="lg"
            >
              <Instagram className="h-5 w-5" />
              Заказать через Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}