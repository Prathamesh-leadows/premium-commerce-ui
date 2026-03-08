import { CardImage, products } from "@/components/ProductCard";
import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Group categories from existing products to mock filters
  const categories = Array.from(new Set(products.map(p => p.category))).filter(Boolean);

  return (
    <div className="bg-background min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">All Products</h1>
            <p className="text-muted-foreground text-lg">Showing {products.length} results</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>

            <div className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium cursor-pointer hover:bg-accent transition-colors">
              Sort by: Featured <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">

          {/* Sidebar / Filters (Desktop & Mobile Wrapper) */}
          <aside className={`lg:w-64 shrink-0 transition-all duration-300 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8 glass p-6 rounded-2xl">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-medium text-primary">All Collections</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{products.length}</span>
                  </li>
                  {categories.map(category => (
                    <li key={category} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{category}</span>
                      <span className="text-xs bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary px-2 py-0.5 rounded-full transition-colors">
                        {products.filter(p => p.category === category).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-border" />

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                <div className="space-y-4">
                  {/* Mock Slider Visual */}
                  <div className="w-full h-1.5 bg-secondary rounded-full relative">
                    <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full" />
                    <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm" />
                    <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>₹500</span>
                    <span>₹25k+</span>
                  </div>
                </div>
              </div>

              <hr className="border-border" />
              <button className="w-full py-2.5 bg-primary/10 text-primary font-medium rounded-xl hover:bg-primary/20 transition-colors">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {products.map((product) => (
                <CardImage key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Mock */}
            <div className="mt-16 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:bg-accent transition-colors" disabled>
                  ←
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-medium shadow-md">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-foreground hover:bg-accent transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-foreground hover:bg-accent transition-colors">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-foreground hover:bg-accent transition-colors">
                  →
                </button>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Products;
