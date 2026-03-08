import { ArrowRight, Laptop, Watch, Home, Armchair, Coffee, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
    { name: "Electronics", icon: Laptop, color: "bg-blue-500/10 text-blue-600", path: "/products?category=electronics" },
    { name: "Accessories", icon: Watch, color: "bg-amber-500/10 text-amber-600", path: "/products?category=accessories" },
    { name: "Smart Home", icon: Home, color: "bg-emerald-500/10 text-emerald-600", path: "/products?category=smart-home" },
    { name: "Furniture", icon: Armchair, color: "bg-rose-500/10 text-rose-600", path: "/products?category=furniture" },
    { name: "Lifestyle", icon: Coffee, color: "bg-orange-500/10 text-orange-600", path: "/products?category=lifestyle" },
    { name: "Audio", icon: Headphones, color: "bg-violet-500/10 text-violet-600", path: "/products?category=audio" },
];

const CategoryShowcase = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Shop by Category</h2>
                        <p className="text-muted-foreground text-lg">Explore our diverse range of premium collections.</p>
                    </div>
                    <Link to="/products" className="group inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        View All Categories
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border border-border/50 bg-background/50 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-sm">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.name}
                                to={category.path}
                                className="group flex flex-col items-center p-6 bg-white dark:bg-black rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
                            >
                                <div className={`p-4 rounded-full mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;
