import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Buynow from "./components/Buynow";
import Orders from "./components/Orders";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <h1>Simple React Ecommerce</h1>

      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart ({cart.length})</Link> |{" "}
      <Link to="/orders">Orders ({orders.length})</Link> |{" "}

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Routes>
        <Route path="/" element={<Products />} />

        <Route
          path="/product/:id"
          element={<Product cart={cart} setCart={setCart} />}
        />

        <Route
          path="/buynow/:id"
          element={
            <ProtectedRoute>
              <Buynow orders={orders} setOrders={setOrders} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart cart={cart} setCart={setCart} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders orders={orders} />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
