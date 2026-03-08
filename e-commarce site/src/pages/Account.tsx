import { useState } from "react";
import { User, Package, Heart, Settings, LogOut, ChevronRight, CreditCard, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Personal Information", icon: User },
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="bg-background min-h-[calc(100vh-80px)] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-6 mb-8 md:mb-12 border-b border-border pb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-violet-500 p-1">
            <div className="w-full h-full bg-white dark:bg-black rounded-full flex items-center justify-center text-2xl font-bold">
              JD
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">John Doe</h1>
            <p className="text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

          {/* Sidebar Menu */}
          <aside className="md:w-64 shrink-0">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                  >
                    <div className="flex items-center gap-3 font-medium">
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </div>
                    {isActive && <ChevronRight className="h-4 w-4 opacity-50" />}
                  </button>
                );
              })}

              <div className="pt-6 mt-6 border-t border-border">
                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors w-full font-medium">
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-h-[400px]">
            <div className="glass p-6 md:p-8 rounded-3xl border border-border/50 h-full">

              {activeTab === "profile" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="space-y-6 max-w-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">First Name</label>
                        <input type="text" defaultValue="John" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                      <input type="email" defaultValue="john.doe@example.com" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" readOnly />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                      <input type="tel" defaultValue="+91 98765 43210" className="w-full p-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    </div>

                    <div className="pt-4">
                      <Button className="rounded-xl px-8">Save Changes</Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Order History</h2>
                  </div>

                  <div className="space-y-4">
                    {/* Mock Order Item */}
                    <div className="border border-border rounded-2xl p-4 sm:p-6 bg-background">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-border">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Order #ORD-2026-9876</p>
                          <p className="font-medium">Placed on Oct 24, 2026</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 rounded-full text-sm font-medium">Delivered</span>
                          <p className="font-bold">₹14,999</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-secondary overflow-hidden shrink-0">
                          <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-semibold line-clamp-1">Aura Premium Wireless Headphones</h4>
                          <p className="text-sm text-muted-foreground">Qty: 1</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 flex gap-3 sm:justify-end border-t border-border">
                        <Button variant="outline" size="sm" className="rounded-lg">Track Order</Button>
                        <Button size="sm" className="rounded-lg">Write Review</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Skeleton for other tabs */}
              {["wishlist", "payment", "notifications", "settings"].includes(activeTab) && (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500 text-muted-foreground">
                  <div className="w-20 h-20 mb-4 bg-secondary rounded-full flex items-center justify-center">
                    <Settings className="h-8 w-8 opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 capitalize">{activeTab}</h3>
                  <p className="max-w-md">This section is currently under construction. Check back later for updates to the {activeTab} area.</p>
                </div>
              )}

            </div>
          </main>
        </div>

      </div>
    </div>
  );
};

export default Account;
