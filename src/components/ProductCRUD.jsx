
import React, { useState, useEffect } from "react";

export default function ProductCRUD() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", ribbon: false });

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", price: "", ribbon: false });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleRibbon = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, ribbon: !p.ribbon } : p
    ));
  };

  return (
    <div className="container mt-4">
      <h3>Gestión de Productos</h3>
      <form onSubmit={handleAdd} className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Precio"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </div>
        <div className="col-md-3 form-check mt-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="ribbonCheck"
            checked={newProduct.ribbon}
            onChange={(e) => setNewProduct({ ...newProduct, ribbon: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="ribbonCheck">Ribbon</label>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Agregar</button>
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Ribbon</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>
                <input
                  type="checkbox"
                  checked={p.ribbon}
                  onChange={() => toggleRibbon(p.id)}
                />
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
