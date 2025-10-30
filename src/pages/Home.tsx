import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            NEW SEASON
          </h1>
          <p className="text-xl md:text-2xl mb-8 tracking-wide">
            Discover the Latest Trends
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/shop" className="group relative overflow-hidden h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">WOMEN</h2>
            </div>
          </Link>
          <Link to="/shop" className="group relative overflow-hidden h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">MEN</h2>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">TRENDING NOW</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg" className="font-semibold px-12">
              VIEW ALL
            </Button>
          </Link>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FREE SHIPPING ON ORDERS OVER $50
          </h2>
          <p className="text-lg">Use code: FREESHIP at checkout</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
