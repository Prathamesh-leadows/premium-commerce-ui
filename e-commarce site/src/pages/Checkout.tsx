import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal > 5000 ? subtotal : subtotal + 500;

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
        clearCart();
    };

    if (isSuccess) {
        return (
            <div className="min-h-[calc(100vh-80px)] bg-background flex flex-col items-center justify-center p-4">
                <div className="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 p-4 rounded-full mb-6 animate-in zoom-in duration-500">
                    <CheckCircle2 className="h-16 w-16" />
                </div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight">Order Confirmed!</h1>
                <p className="text-muted-foreground text-center max-w-md mb-8">
                    Thank you for your purchase. We've received your order and will email you the receipt and tracking details shortly.
                </p>
                <div className="flex gap-4">
                    <Link to="/orders">
                        <Button variant="outline" className="rounded-full px-8 h-12">View Order</Button>
                    </Link>
                    <Link to="/products">
                        <Button className="rounded-full px-8 h-12 shadow-lg shadow-primary/20">Continue Shopping</Button>
                    </Link>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link to="/products"><Button>Return to Shop</Button></Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-[calc(100vh-80px)] pt-8 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-medium">
                    <ArrowLeft className="h-4 w-4" /> Back to Cart
                </Link>
                <h1 className="text-3xl font-bold tracking-tight mb-8">Secure Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    <div className="lg:w-2/3">
                        <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
                            {/* Contact Info */}
                            <div className="glass p-6 md:p-8 rounded-3xl border border-border/50">
                                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">Email Address</label>
                                        <input required type="email" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">Phone Number</label>
                                        <input required type="tel" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91" />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="glass p-6 md:p-8 rounded-3xl border border-border/50">
                                <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">First Name</label>
                                        <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">Last Name</label>
                                        <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">Street Address</label>
                                        <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">City</label>
                                        <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">State</label>
                                        <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground block mb-1.5">ZIP / Postal Code</label>
                                        <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="glass p-6 md:p-8 rounded-3xl border border-border/50">
                                <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                                <div className="space-y-4">
                                    <div className="border border-primary rounded-xl p-4 bg-primary/5 flex items-center gap-3">
                                        <input type="radio" name="payment" id="card" className="w-4 h-4 text-primary" defaultChecked />
                                        <label htmlFor="card" className="font-medium">Credit / Debit Card</label>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <div className="sm:col-span-2">
                                            <label className="text-sm font-medium text-muted-foreground block mb-1.5">Card Number</label>
                                            <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="0000 0000 0000 0000" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground block mb-1.5">Expiry Date</label>
                                                <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="MM/YY" />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground block mb-1.5">CVV</label>
                                                <input required type="text" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="123" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className="lg:w-1/3 shrink-0">
                        <div className="sticky top-24 glass p-6 md:p-8 rounded-3xl border border-border/50">
                            <h2 className="text-xl font-bold mb-6 border-b border-border pb-4">Order Summary</h2>

                            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-secondary">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-sm line-clamp-2 leading-tight mb-1">{item.title}</p>
                                            <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="font-medium text-sm">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-border pt-4 mb-4 space-y-3">
                                <div className="flex justify-between text-muted-foreground text-sm">
                                    <span>Subtotal</span>
                                    <span className="text-foreground">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground text-sm">
                                    <span>Shipping</span>
                                    <span className="text-foreground">₹{total - subtotal}</span>
                                </div>
                            </div>

                            <div className="border-t border-border pt-4 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-2xl font-bold text-primary">₹{total.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <Button type="submit" form="checkout-form" size="lg" className="w-full rounded-2xl h-14 text-lg font-medium shadow-primary/20 shadow-lg hover:shadow-primary/40 transition-all gap-2">
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
