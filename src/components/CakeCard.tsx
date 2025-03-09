import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface CakeCardProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
}

const CakeCard: React.FC<CakeCardProps> = ({ imageUrl, title, price, description }) => {
  return (
    <Card className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CakeCard;
