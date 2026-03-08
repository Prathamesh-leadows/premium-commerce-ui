import { CardImage, products } from "@/components/ProductCard";
import { Tag } from "lucide-react";

const Deals = () => {
  // Mock logic for deals: Show products under 10000 
  const dealProducts = products.filter(p => p.price < 10000);

  return (
    <div className="bg-background min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Deal Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-500 to-rose-600 text-white mb-12 p-8 md:p-12 shadow-xl shadow-red-500/20">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-md">
                <Tag className="h-4 w-4" /> Limited Time Offers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Summer Flash Sale</h1>
              <p className="text-red-100 text-lg md:text-xl max-w-xl">Get up to 40% off on selected premium items. Offer ends in 24 hours.</p>
            </div>
            <div className="shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
              <div className="text-sm text-red-100 font-medium uppercase tracking-wider mb-2">Ends In</div>
              <div className="flex items-center gap-3 text-3xl font-bold">
                <div className="flex flex-col"><span className="tabular-nums">12</span><span className="text-[10px] text-red-200 uppercase font-medium">Hours</span></div>
                <span className="text-red-300 -mt-4">:</span>
                <div className="flex flex-col"><span className="tabular-nums">45</span><span className="text-[10px] text-red-200 uppercase font-medium">Mins</span></div>
                <span className="text-red-300 -mt-4">:</span>
                <div className="flex flex-col"><span className="tabular-nums">30</span><span className="text-[10px] text-red-200 uppercase font-medium">Secs</span></div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Active Deals
            <span className="bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs py-1 px-2.5 rounded-full font-bold">
              {dealProducts.length} Items
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <div key={product.id} className="relative">
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform -rotate-3">
                -20% OFF
              </div>
              <CardImage product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
