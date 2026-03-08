import { useParams, Link } from "react-router-dom";
import { products } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartProvider";
import { ArrowLeft, Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const product = products.find(p => p.id === Number(id)) || products[0];

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    if (!product) {
        return <div className="p-24 text-center">Product not found</div>;
    }

    return (
        <div className="bg-background min-h-[calc(100vh-80px)] pt-8 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-medium">
                    <ArrowLeft className="h-4 w-4" /> Back to Products
                </Link>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Product Image Gallery */}
                    <div className="lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden bg-secondary aspect-square flex items-center justify-center relative">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-primary/10 text-primary backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                                {product.category}
                            </div>
                        </div>
                        {/* Thumbnail mocks */}
                        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                            {[1, 2, 3].map((i) => (
                                <button key={i} className={`w-20 h-20 rounded-xl overflow-hidden bg-secondary shrink-0 border-2 ${i === 1 ? 'border-primary' : 'border-transparent'}`}>
                                    <img src={product.image} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:w-1/2 py-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.title}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 text-amber-500">
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current opacity-50" />
                            </div>
                            <span className="text-muted-foreground text-sm font-medium">124 Reviews</span>
                        </div>

                        <p className="text-3xl font-bold text-primary mb-6">₹{product.price.toLocaleString('en-IN')}</p>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {product.description}. This premium item is crafted with the highest quality materials to ensure durability and style. Enhance your lifestyle with this exceptional product.
                        </p>

                        <div className="space-y-6 mb-8 border-y border-border py-8">
                            <div className="flex items-center gap-4">
                                <span className="w-24 text-sm font-medium text-muted-foreground">Quantity</span>
                                <div className="flex items-center border border-border rounded-xl">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-secondary rounded-l-xl transition-colors">-</button>
                                    <span className="w-12 text-center font-medium">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-secondary rounded-r-xl transition-colors">+</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button onClick={handleAddToCart} size="lg" className={`flex-1 rounded-2xl h-14 text-lg font-medium transition-all ${isAdded ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20' : 'shadow-primary/20 shadow-lg hover:shadow-primary/40'}`}>
                                {isAdded ? "Added to Cart ✓" : "Add to Cart"}
                            </Button>
                            <Link to="/checkout" className="flex-1">
                                <Button variant="secondary" size="lg" className="w-full rounded-2xl h-14 text-lg font-medium border border-border hover:border-primary/50 transition-colors">
                                    Buy Now
                                </Button>
                            </Link>
                        </div>

                        {/* Guarantees */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                    <Truck className="h-5 w-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-foreground">Free Shipping</p>
                                    <p>On orders over ₹5000</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-foreground">1 Year Warranty</p>
                                    <p>Guaranteed quality</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                    <RotateCcw className="h-5 w-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-foreground">14 Days Return</p>
                                    <p>No questions asked</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
