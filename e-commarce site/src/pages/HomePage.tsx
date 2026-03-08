import { CardImage, products } from "@/components/ProductCard";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryShowcase />

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Featured Collection</h2>
              <p className="text-muted-foreground text-lg">Handpicked essentials that define modern living.</p>
            </div>
            <Link to="/products" className="group inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-black rounded-full border shadow-sm font-medium hover:border-primary transition-colors">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {products.slice(0, 3).map((product) => (
              <CardImage key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
