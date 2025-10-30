import womenDress1 from "@assets/stock_images/elegant_women_dress__7a01bf7e.jpg";
import womenDress2 from "@assets/stock_images/elegant_women_dress__3847c445.jpg";
import womenDress3 from "@assets/stock_images/elegant_women_dress__fa0978da.jpg";
import womenDress4 from "@assets/stock_images/elegant_women_dress__686b8f13.jpg";
import womenDress5 from "@assets/stock_images/elegant_women_dress__7de30fce.jpg";

import menShirt1 from "@assets/stock_images/men_casual_shirt_bus_6d58047e.jpg";
import menShirt2 from "@assets/stock_images/men_casual_shirt_bus_f67a07fb.jpg";
import menShirt3 from "@assets/stock_images/men_casual_shirt_bus_43fc1e34.jpg";
import menShirt4 from "@assets/stock_images/men_casual_shirt_bus_a812e6e7.jpg";
import menShirt5 from "@assets/stock_images/men_casual_shirt_bus_9e51e958.jpg";

import menJacket1 from "@assets/stock_images/men_formal_jacket_bl_17bcaf5f.jpg";
import menJacket2 from "@assets/stock_images/men_formal_jacket_bl_2a7a133b.jpg";
import menJacket3 from "@assets/stock_images/men_formal_jacket_bl_46c1a984.jpg";
import menJacket4 from "@assets/stock_images/men_formal_jacket_bl_2fe54a36.jpg";
import menJacket5 from "@assets/stock_images/men_formal_jacket_bl_382fade3.jpg";

import womenTop1 from "@assets/stock_images/women_summer_top_blo_7303c865.jpg";
import womenTop2 from "@assets/stock_images/women_summer_top_blo_fe1ded6c.jpg";
import womenTop3 from "@assets/stock_images/women_summer_top_blo_470688bc.jpg";
import womenTop4 from "@assets/stock_images/women_summer_top_blo_46efdf81.jpg";
import womenTop5 from "@assets/stock_images/women_summer_top_blo_e6ea5175.jpg";

import kidsClothing1 from "@assets/stock_images/kids_children_clothi_e684d6ff.jpg";
import kidsClothing2 from "@assets/stock_images/kids_children_clothi_789411c2.jpg";
import kidsClothing3 from "@assets/stock_images/kids_children_clothi_c2875ab7.jpg";
import kidsClothing4 from "@assets/stock_images/kids_children_clothi_5a2b365b.jpg";
import kidsClothing5 from "@assets/stock_images/kids_children_clothi_131edb99.jpg";

import accessory1 from "@assets/stock_images/accessories_watch_su_1accda01.jpg";
import accessory2 from "@assets/stock_images/accessories_watch_su_1fc41cba.jpg";
import accessory3 from "@assets/stock_images/accessories_watch_su_402940be.jpg";
import accessory4 from "@assets/stock_images/accessories_watch_su_dc221318.jpg";
import accessory5 from "@assets/stock_images/accessories_watch_su_8305bb2b.jpg";

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
  // Women Category - 5 Items
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: 149.99,
    image: womenDress1,
    category: "Women",
    description: "Stunning evening dress perfect for special occasions. Features elegant design with premium fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"]
  },
  {
    id: 2,
    name: "Formal Cocktail Dress",
    price: 129.99,
    image: womenDress2,
    category: "Women",
    description: "Sophisticated cocktail dress with modern silhouette. Ideal for parties and formal events.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Black", "Emerald"]
  },
  {
    id: 3,
    name: "Summer Maxi Dress",
    price: 89.99,
    image: womenDress3,
    category: "Women",
    description: "Flowy maxi dress perfect for summer occasions. Lightweight and breathable fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print", "Solid Navy", "Coral"]
  },
  {
    id: 4,
    name: "Casual Day Dress",
    price: 69.99,
    image: womenDress4,
    category: "Women",
    description: "Comfortable day dress for everyday wear. Versatile design that works for any occasion.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige", "Light Blue"]
  },
  {
    id: 5,
    name: "Designer Party Dress",
    price: 179.99,
    image: womenDress5,
    category: "Women",
    description: "Exclusive designer dress with unique details. Make a statement at any event.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Silver", "Rose"]
  },

  // Men Category - 5 Items
  {
    id: 6,
    name: "Premium Business Shirt",
    price: 79.99,
    image: menShirt1,
    category: "Men",
    description: "Professional business shirt with wrinkle-resistant fabric. Perfect for office wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"]
  },
  {
    id: 7,
    name: "Classic Oxford Shirt",
    price: 69.99,
    image: menShirt2,
    category: "Men",
    description: "Timeless Oxford shirt with button-down collar. Essential for any wardrobe.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "White", "Gray"]
  },
  {
    id: 8,
    name: "Casual Polo Shirt",
    price: 49.99,
    image: menShirt3,
    category: "Men",
    description: "Comfortable polo shirt perfect for casual occasions. Premium cotton blend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Burgundy"]
  },
  {
    id: 9,
    name: "Slim Fit Dress Shirt",
    price: 84.99,
    image: menShirt4,
    category: "Men",
    description: "Modern slim fit dress shirt with tailored design. Perfect for formal occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Charcoal"]
  },
  {
    id: 10,
    name: "Casual Linen Shirt",
    price: 59.99,
    image: menShirt5,
    category: "Men",
    description: "Breathable linen shirt ideal for warm weather. Relaxed fit with natural fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Beige", "Light Blue"]
  },

  // Outerwear Category - 5 Items
  {
    id: 11,
    name: "Tailored Blazer",
    price: 199.99,
    image: menJacket1,
    category: "Outerwear",
    description: "Sophisticated tailored blazer for professional settings. Premium wool blend construction.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Charcoal", "Black"]
  },
  {
    id: 12,
    name: "Casual Sport Jacket",
    price: 149.99,
    image: menJacket2,
    category: "Outerwear",
    description: "Versatile sport jacket perfect for smart casual occasions. Modern fit and design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Brown", "Navy", "Gray"]
  },
  {
    id: 13,
    name: "Winter Coat",
    price: 249.99,
    image: menJacket3,
    category: "Outerwear",
    description: "Warm winter coat with insulated lining. Stylish and functional for cold weather.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Camel", "Navy"]
  },
  {
    id: 14,
    name: "Bomber Jacket",
    price: 129.99,
    image: menJacket4,
    category: "Outerwear",
    description: "Classic bomber jacket with modern details. Perfect for casual everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"]
  },
  {
    id: 15,
    name: "Trench Coat",
    price: 189.99,
    image: menJacket5,
    category: "Outerwear",
    description: "Timeless trench coat with water-resistant fabric. Essential for rainy days.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige", "Black", "Navy"]
  },

  // Tops Category - 5 Items
  {
    id: 16,
    name: "Silk Blouse",
    price: 89.99,
    image: womenTop1,
    category: "Tops",
    description: "Luxurious silk blouse with elegant draping. Perfect for professional and formal wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Rose"]
  },
  {
    id: 17,
    name: "Summer Tank Top",
    price: 34.99,
    image: womenTop2,
    category: "Tops",
    description: "Lightweight tank top perfect for summer. Breathable fabric with stylish design.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Coral", "Mint"]
  },
  {
    id: 18,
    name: "Casual T-Shirt",
    price: 29.99,
    image: womenTop3,
    category: "Tops",
    description: "Essential casual t-shirt made from soft cotton. Comfortable for everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"]
  },
  {
    id: 19,
    name: "Cropped Sweater",
    price: 64.99,
    image: womenTop4,
    category: "Tops",
    description: "Trendy cropped sweater with cozy knit. Perfect for layering in cooler weather.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Pink", "Gray"]
  },
  {
    id: 20,
    name: "Striped Shirt",
    price: 54.99,
    image: womenTop5,
    category: "Tops",
    description: "Classic striped shirt with modern fit. Versatile piece for any wardrobe.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy Stripe", "Black Stripe", "Red Stripe"]
  },

  // Kids Category - 5 Items
  {
    id: 21,
    name: "Kids Graphic Tee",
    price: 24.99,
    image: kidsClothing1,
    category: "Kids",
    description: "Fun graphic t-shirt for kids. Comfortable cotton with vibrant prints.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Blue", "Red", "Green"]
  },
  {
    id: 22,
    name: "Children's Hoodie",
    price: 39.99,
    image: kidsClothing2,
    category: "Kids",
    description: "Cozy hoodie perfect for active kids. Soft fleece interior for warmth.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Gray", "Navy", "Pink"]
  },
  {
    id: 23,
    name: "Kids Denim Jacket",
    price: 49.99,
    image: kidsClothing3,
    category: "Kids",
    description: "Classic denim jacket sized for kids. Durable and stylish outerwear.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Light Denim", "Dark Denim"]
  },
  {
    id: 24,
    name: "Youth Activewear Set",
    price: 44.99,
    image: kidsClothing4,
    category: "Kids",
    description: "Complete activewear set for sports and play. Breathable and flexible fabric.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Black", "Navy", "Purple"]
  },
  {
    id: 25,
    name: "Kids Summer Dress",
    price: 34.99,
    image: kidsClothing5,
    category: "Kids",
    description: "Cute summer dress for girls. Comfortable and perfect for warm days.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Pink", "Yellow", "Floral"]
  },

  // Accessories Category - 5 Items
  {
    id: 26,
    name: "Designer Watch",
    price: 299.99,
    image: accessory1,
    category: "Accessories",
    description: "Elegant designer watch with precision movement. Sophisticated timepiece for any occasion.",
    sizes: ["One Size"],
    colors: ["Silver", "Gold", "Rose Gold"]
  },
  {
    id: 27,
    name: "Premium Sunglasses",
    price: 159.99,
    image: accessory2,
    category: "Accessories",
    description: "High-quality sunglasses with UV protection. Stylish frames with polarized lenses.",
    sizes: ["One Size"],
    colors: ["Black", "Tortoise", "Silver"]
  },
  {
    id: 28,
    name: "Leather Handbag",
    price: 199.99,
    image: accessory3,
    category: "Accessories",
    description: "Genuine leather handbag with spacious interior. Classic design that never goes out of style.",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: 29,
    name: "Designer Belt",
    price: 89.99,
    image: accessory4,
    category: "Accessories",
    description: "Premium leather belt with signature buckle. Essential accessory for any outfit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"]
  },
  {
    id: 30,
    name: "Fashion Scarf",
    price: 49.99,
    image: accessory5,
    category: "Accessories",
    description: "Luxurious fashion scarf made from soft fabric. Perfect finishing touch to any ensemble.",
    sizes: ["One Size"],
    colors: ["Red", "Blue", "Multi-color"]
  }
];
