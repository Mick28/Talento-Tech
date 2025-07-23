import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  const rows = [0, 1, 2];
  return (
    <div>
      {rows.map((row, i) => (
        <div className="row" key={i}>
          {products.slice(row * 4, row * 4 + 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
