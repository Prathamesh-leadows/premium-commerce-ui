import { Command, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                                <Command className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                Aura<span className="text-primary">Mart</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                            Curated premium lifestyle products delivered with exceptional experience and design.
                        </p>
                        <div className="flex space-x-4 text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Shop</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link to="/deals" className="hover:text-primary transition-colors">Special Offers</Link></li>
                            <li><Link to="/products?category=new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link to="/products?category=trending" className="hover:text-primary transition-colors">Trending</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Support</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Stay in the loop</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe for exclusive deals and new releases.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <Button type="submit" size="sm" className="shrink-0 gap-2">
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} AuraMart Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
