import React from "react";

export default function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6 className="my-0">{item.name}</h6>
                  <small className="text-muted">{item.description}</small>
                </div>
                <div>
                  <span className="text-muted me-3">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </li>
          </ul>
          <button className="btn btn-warning" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
