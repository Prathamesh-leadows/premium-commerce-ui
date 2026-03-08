import { useCart } from "@/components/CartProvider";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added anything to your cart yet. Explore our premium collections.
        </p>
        <Link to="/products">
          <Button size="lg" className="rounded-full px-8 gap-2">
            Start Shopping <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-[calc(100vh-80px)] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items List */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 p-4 md:p-6 bg-white dark:bg-black/50 border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
                </div>

                {/* Info & Controls */}
                <div className="flex flex-col flex-1 justify-between gap-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-lg leading-tight mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{item.category}</p>
                    </div>
                    <p className="font-bold text-lg whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-border rounded-full p-1 bg-background">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted text-foreground transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted text-foreground transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm flex items-center gap-1.5 text-muted-foreground hover:text-destructive transition-colors font-medium px-2 py-1"
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-24 glass p-6 md:p-8 rounded-3xl border border-border/50">
              <h2 className="text-xl font-bold mb-6 border-b border-border pb-4">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="text-foreground font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-foreground font-medium">
                    {shipping === 0 ? <span className="text-emerald-500 font-bold">Free</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Taxes</span>
                  <span className="text-foreground font-medium">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-bold text-primary">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-muted-foreground text-right mt-1">Including GST</p>
              </div>

              <Link to="/checkout" className="block mt-8">
                <Button size="lg" className="w-full rounded-2xl h-14 text-lg font-medium shadow-primary/20 shadow-lg hover:shadow-primary/40 transition-all gap-2">
                  Proceed to Checkout <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-xl">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  Secure encrypted checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
