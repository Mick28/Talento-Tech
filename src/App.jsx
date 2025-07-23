import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";
import Promotions from "./components/Promotions";

import productsData from "./components/data/products";
import promotionsData from "./components/data/promotions";

export default function App() {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState([
    ...productsData,
    ...promotionsData,
  ]);

  // Carga desde localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setAllProducts(JSON.parse(savedProducts));
    }
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guarda en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(allProducts));
  }, [allProducts]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={allProducts} addToCart={addToCart} />
            }
          />
          <Route
            path="/promotions"
            element={
              <Promotions
                products={allProducts.filter((p) => p.isPromo)}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel
                  products={allProducts}
                  setProducts={setAllProducts}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
