import { Link } from "react-router-dom";
import { products } from "../utilis/api";

export default function Products() {
  return (
    <div>
      <h2>All Products</h2>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>₹ {item.price}</p>

          <Link to={`/product/${item.id}`}>
            View Product
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}
