import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">FASHION</h3>
            <p className="text-sm opacity-80">
              Your destination for the latest trends and timeless classics.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 transition-opacity">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 transition-opacity">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 transition-opacity">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; 2024 FASHION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
