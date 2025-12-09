import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/products";
import Product from "./components/product";

function App() {
  return (
    <div>
      <h1>MERN Ecommerce Project</h1>

      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
