import React, { useEffect, useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [imageUrl, setImageUrl] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const storageKey = `product_image_${product.id}`;
    const storedImage = localStorage.getItem(storageKey);

    if (storedImage) {
      setImageUrl(storedImage);
    } else {
      fetch("https://picsum.photos/200/200").then((response) => {
        const url = response.url;
        localStorage.setItem(storageKey, url);
        setImageUrl(url);
      });
    }
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 position-relative">
        {product.isPromo && <div className="ribbon">Promo</div>}
        {imageUrl && (
          <img src={imageUrl} className="card-img-top" alt={product.name} />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>

          {product.discountedPrice ? (
            <p>
              <span className="text-muted text-decoration-line-through me-2">
                ${product.price.toFixed(2)}
              </span>
              <span className="fw-bold text-danger">
                ${product.discountedPrice}
              </span>
            </p>
          ) : (
            <p className="fw-bold">${product.price.toFixed(2)}</p>
          )}

          {!product.stock ? (
            <button className="btn btn-secondary mt-auto" disabled>
              Producto Agotado
            </button>
          ) : (
            <button
              className={`btn ${
                added ? "btn-secondary" : "btn-primary"
              } mt-auto`}
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? "Producto sumado al carrito" : "Agregar al carrito"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
