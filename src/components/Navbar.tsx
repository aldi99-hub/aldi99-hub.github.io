import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            FASHION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium hover:text-accent transition-colors">
              WOMEN
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-accent transition-colors">
              MEN
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-accent transition-colors">
              NEW
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
              ABOUT
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-accent transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="hover:text-accent transition-colors">
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-border">
            <Link
              to="/shop"
              className="block text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              WOMEN
            </Link>
            <Link
              to="/shop"
              className="block text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              MEN
            </Link>
            <Link
              to="/shop"
              className="block text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              NEW
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
