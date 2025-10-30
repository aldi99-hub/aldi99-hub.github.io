export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    category: "Women",
    description: "Essential wardrobe staple. Made from premium cotton for ultimate comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"]
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&q=80",
    category: "Women",
    description: "Timeless denim jacket with a modern fit. Perfect for layering.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Black"]
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    category: "Men",
    description: "Modern slim fit jeans with stretch for comfort and style.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Dark Blue", "Black", "Light Blue"]
  },
  {
    id: 4,
    name: "Floral Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
    category: "Women",
    description: "Elegant floral dress perfect for any occasion. Lightweight and breathable.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Pink", "Floral Blue"]
  },
  {
    id: 5,
    name: "Leather Sneakers",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
    category: "Men",
    description: "Premium leather sneakers with classic design. Comfortable for all-day wear.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Navy"]
  },
  {
    id: 6,
    name: "Knit Sweater",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
    category: "Women",
    description: "Cozy knit sweater perfect for cooler days. Soft and warm material.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Cream"]
  },
  {
    id: 7,
    name: "Sports Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    category: "Men",
    description: "Comfortable sports hoodie for active lifestyle. Breathable fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy"]
  },
  {
    id: 8,
    name: "Summer Blouse",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&q=80",
    category: "Women",
    description: "Lightweight summer blouse with elegant design. Perfect for warm weather.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Pink", "Blue"]
  }
];
