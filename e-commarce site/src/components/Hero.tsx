import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-background pt-[80px] pb-16 md:pt-[120px] md:pb-24">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50 animate-in fade-in duration-1000" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-3xl opacity-50 animate-in fade-in duration-1000 delay-300" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left animate-in slide-in-from-left-8 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            New Fall Collection 2026
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            Elevate Your <br className="hidden md:block" />
                            <span className="text-gradient">Everyday Style.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                            Discover curated premium products designed to bring elegance and functionality into your daily life.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link to="/products">
                                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full text-base h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                    Shop Now
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/deals">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 rounded-full text-base h-12 px-8 glass hover:bg-white/90 dark:hover:bg-black/90">
                                    <ShoppingBag className="h-4 w-4" />
                                    View Deals
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="md:w-1/2 relative animate-in slide-in-from-right-8 duration-700 delay-200">
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            {/* Main Image Plate */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-violet-500/20 rounded-3xl transform rotate-3 scale-105" />
                            <div className="absolute inset-0 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden border border-border">
                                <img
                                    src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Premium Lifestyle"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Element 1 */}
                            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-xl">
                                    ★
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">4.9/5</p>
                                    <p className="text-xs text-muted-foreground">Customer Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
