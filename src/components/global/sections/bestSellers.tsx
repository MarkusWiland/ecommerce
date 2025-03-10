import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Section } from "../common/section";

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
}

const bestSellers: Product[] = [
  {
    id: 1,
    title: "Barn fotbollströja Messi, Argentina",
    price: 329,
    oldPrice: 530,
    image: "/lamal.jpg", // Uppdatera med rätt bildkälla
    inStock: true,
  },
  {
    id: 2,
    title: "Barn fotbollströja Ronaldo, Portugal",
    price: 349,
    oldPrice: 549,
    image: "/lamal.jpg", // Uppdatera med rätt bildkälla
    inStock: true,
  },
];

export default function BestSellers() {
  return (
    <Section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🔥 Bästsäljare</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {bestSellers.map((product) => (
          <Card
            key={product.id}
            className="p-4 shadow-lg hover:shadow-xl transition duration-300 rounded-lg"
          >
            <div className="relative w-full h-72 bg-white rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="transition duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">{product.oldPrice} kr</span>
                )}
                <span className="text-red-500 text-lg font-bold">{product.price} kr</span>
              </div>
              <div className="flex items-center justify-center mt-2 text-green-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-1" />
                {product.inStock ? "I lager" : "Ej i lager"}
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full text-white font-medium rounded-md">
                🛒 Gå till produkt
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
