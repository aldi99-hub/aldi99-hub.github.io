import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">ABOUT US</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing you the latest fashion trends with timeless style
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for fashion and a commitment to quality, we've been
              bringing the latest trends to fashion-forward individuals for over a decade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to make high-quality, stylish clothing accessible to everyone.
              We believe that fashion should be both beautiful and comfortable, which is why
              we carefully curate each piece in our collection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From casual everyday wear to statement pieces, we offer a diverse range of
              styles to suit every occasion and personality.
            </p>
          </div>
          <div className="h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
              alt="Store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials to ensure durability and comfort
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Fashion</h3>
                <p className="text-muted-foreground">
                  Committed to eco-friendly practices and ethical production
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority, from browsing to delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="aspect-square mb-4 bg-muted overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1438761681033 + i * 1000}-6c92c69d1fad?w=400&q=80`}
                    alt={`Team member ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
