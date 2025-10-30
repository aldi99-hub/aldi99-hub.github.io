import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="overflow-hidden bg-card mb-4">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase">{category}</p>
        <h3 className="font-medium group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="font-semibold">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
