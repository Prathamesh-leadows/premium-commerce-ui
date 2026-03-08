import { useState } from "react"
import { Menu, Home, ShoppingBag, Tag, ShoppingCart, User, X } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="p-2 hover:bg-gray-100 rounded-lg">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/80" onClick={() => setIsOpen(false)} />
          <div className="fixed z-50 inset-y-0 left-0 h-full w-3/4 sm:max-w-sm bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <ShoppingBag className="h-5 w-5" />
                <span>Products</span>
              </Link>
              <Link to="/deals" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <Tag className="h-5 w-5" />
                <span>Deals</span>
              </Link>
              <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>
              <Link to="/account" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default Sidebar
