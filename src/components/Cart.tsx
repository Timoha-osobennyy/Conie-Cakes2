import React from "react";
import { X, Instagram, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalItems, clearCart } = useCart();
  
  const openInstagramMessage = () => {
    if (items.length === 0) return;
    
    const orderText = items
      .map(item => `${item.cake.name} (x${item.quantity})`)
      .join("\\n");
    
    const message = `Hello, I would like to order:\\n${orderText}`;
    const username = 'Conie_cakes';
    const url = `https://www.instagram.com/direct/t/${username}/?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Ваша корзина</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Ваша корзина пуста</p>
            <Button variant="link" asChild className="mt-4">
              <a href="/#cakes">Перейти к выбору тортов</a>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mt-4 max-h-[60vh] overflow-auto pr-2">
              {items.map((item) => (
                <div key={item.cake.id} className="flex items-center space-x-4 border-b pb-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img 
                      src={item.cake.image} 
                      alt={item.cake.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium">{item.cake.name}</h4>
                    <div className="flex items-center mt-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.cake.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.cake.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeFromCart(item.cake.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 space-y-4">
              <Button 
                className="w-full flex items-center gap-2" 
                onClick={openInstagramMessage}
              >
                <Instagram className="h-5 w-5" />
                Заказать через Instagram
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={clearCart}
              >
                Очистить корзину
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}