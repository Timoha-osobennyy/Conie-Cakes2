import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Shopping Cart</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Review your selected items
          </CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        {items.length > 0 && (
          <CardFooter className="flex flex-col gap-4">
            <div className="flex justify-between text-sm font-medium">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default Cart;
