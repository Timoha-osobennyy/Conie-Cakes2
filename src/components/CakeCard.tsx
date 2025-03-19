import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface CakeCardProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  delay?: number;
}

const CakeCard: React.FC<CakeCardProps> = ({ imageUrl, title, price, description, delay = 0 }) => {
  return (
    <Card 
      className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardTitle className="text-lg font-semibold animate-fade-in">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: `${delay + 100}ms` }}>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: `${delay + 200}ms` }}>{description}</p>
        <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${delay + 300}ms` }}>
          Order Now
        </button>
      </CardContent>
    </Card>
  );
};

export default CakeCard;