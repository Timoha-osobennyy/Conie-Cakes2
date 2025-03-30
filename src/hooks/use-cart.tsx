import React, { createContext, useContext, useState, useEffect } from "react";
import { Cake } from "@/types";

type CartItem = {
  cake: Cake;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (cake: Cake) => void;
  removeFromCart: (cakeId: string) => void;
  updateQuantity: (cakeId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
  
  const addToCart = (cake: Cake) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.cake.id === cake.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.cake.id === cake.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { cake, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (cakeId: string) => {
    setItems(prevItems => prevItems.filter(item => item.cake.id !== cakeId));
  };
  
  const updateQuantity = (cakeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cakeId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.cake.id === cakeId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
  };
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}