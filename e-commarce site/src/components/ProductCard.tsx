
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/components/CartProvider";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const products = [
  {
    id: 1,
    title: "Aura Premium Wireless Headphones",
    price: 14999,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800",
    description: "Experience crystal clear audio with active noise cancellation and 40-hour battery life.",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Minimalist Leather Watch",
    price: 8500,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    description: "Classic design meets modern craftsmanship with genuine Italian leather strap.",
    category: "Accessories"
  },
  {
    id: 3,
    title: "Smart Home Hub Display",
    price: 12900,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=800",
    description: "Control your entire connected home from one beautiful touchscreen interface.",
    category: "Smart Home"
  },
  {
    id: 4,
    title: "Ergonomic Office Chair X1",
    price: 24000,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
    description: "Designed for all-day comfort with adjustable lumbar support and breathable mesh.",
    category: "Furniture"
  },
  {
    id: 5,
    title: "Ceramic Coffee Pour-Over Kit",
    price: 4500,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    description: "Elevate your morning ritual with this artisanal brewing set.",
    category: "Home & Living"
  },
  {
    id: 6,
    title: "Ultra-Thin Laptop Sleeve",
    price: 2800,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    description: "Water-resistant, vegan leather protection for 13-inch and 15-inch laptops.",
    category: "Accessories"
  },
];

export function CardImage({ product }: { product: (typeof products)[0] }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Link */}
      <Link to={`/ product / ${product.id} `} className="block relative h-[250px] md:h-[300px] overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-t-2xl">
        <img
          src={product.image}
          alt={product.title}
          className={`w - full h - full object - cover transition - transform duration - 700 ease -in -out ${isHovered ? 'scale-110' : 'scale-100'} `}
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-medium tracking-wide bg-white/90 dark:bg-black/80 backdrop-blur text-foreground rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Hover Actions Overlay */}
        <div className={`absolute inset - 0 bg - black / 20 dark: bg - black / 40 backdrop - blur - [2px] transition - opacity duration - 300 flex items - center justify - center gap - 4 ${isHovered ? 'opacity-100' : 'opacity-0'} `}>
          <Button onClick={(e) => { e.preventDefault(); }} size="icon" variant="secondary" className="rounded-full shadow-lg hover:scale-110 transition-transform h-10 w-10">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to Wishlist</span>
          </Button>
          <Button onClick={(e) => { e.preventDefault(); addToCart(product); }} size="icon" className="rounded-full shadow-lg hover:scale-110 transition-transform bg-primary text-primary-foreground h-12 w-12">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Add to Cart</span>
          </Button>
          {/* Quick View (Now Links to Details) */}
          <div className="rounded-full shadow-lg hover:scale-110 transition-transform h-10 w-10 flex items-center justify-center bg-secondary text-secondary-foreground cursor-pointer">
            <Search className="h-4 w-4" />
            <span className="sr-only">Quick View</span>
          </div>
        </div>
      </Link>

      <CardContent className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="font-bold text-lg whitespace-nowrap text-foreground bg-primary/5 px-2 py-0.5 rounded-md">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          className="w-full gap-2 rounded-xl group/btn"
          variant={isHovered ? "default" : "secondary"}
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="h-4 w-4 group-hover/btn:animate-bounce" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
