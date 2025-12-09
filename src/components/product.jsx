import { useParams } from "react-router-dom";
import { products } from "../utilis/api";

export default function Product() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}
