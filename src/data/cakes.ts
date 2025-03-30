import { Cake } from "@/types";

export const cakes: Cake[] = [
  {
    id: "chocolate-raspberry",
    name: "Chocolate-raspberry pancake cake 💓",
    description: "Pancake discs filled with chocolate truffle and raspberry jam ❣️🎂 A perfect combination of sweet and tangy flavors that will delight your taste buds.",
    image: "imaging/photo_5391261207748538572_y (1).jpg",
    ingredients: [
      "Pancake layers",
      "Chocolate truffle cream",
      "Raspberry jam",
      "Fresh raspberries for decoration"
    ],
    category: "specialty"
  },
  {
    id: "matilda",
    name: "Matilda cake 🍫🥰❤️",
    description: "Moist chocolate sponge cake filled and topped with chocolate ganache 💕 A classic chocolate lover's dream that's perfect for any celebration.",
    image: "imaging/matilda.jpg",
    ingredients: [
      "Chocolate sponge cake",
      "Rich chocolate ganache",
      "Chocolate shavings",
      "Cocoa powder"
    ],
    category: "chocolate"
  },
  {
    id: "honey-delight",
    name: "Honey Delight",
    description: "Traditional honey cake with delicate cream and caramelized nuts. A timeless classic with layers of honey-infused goodness.",
    image: "imaging/cake3.jpg",
    ingredients: [
      "Honey-infused cake layers",
      "Delicate cream",
      "Caramelized nuts",
      "Honey drizzle"
    ],
    category: "traditional"
  }
  // Здесь вы можете добавить больше тортов, используя ваши изображения и описания
];