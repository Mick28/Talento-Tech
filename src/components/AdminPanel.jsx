import React, { useState } from 'react';

export default function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: true,
    isPromo: false
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const saveProduct = () => {
    if (!form.name || !form.price) return;
    const newProduct = { ...form, id: editId || Date.now() };
    const updatedList = editId
      ? products.map(p => p.id === editId ? newProduct : p)
      : [...products, newProduct];
    setProducts(updatedList);
    setForm({ name: '', description: '', price: '', stock: true, isPromo: false });
    setEditId(null);
  };

  const editProduct = (prod) => {
    setForm(prod);
    setEditId(prod.id);
  };

  const toggleStock = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, stock: !p.stock } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container">
      <h2>Gestión de Productos</h2>
      <div className="mb-3 row g-2">
        <div className="col">
          <input type="text" className="form-control" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
        </div>
        <div className="col">
          <input type="text" className="form-control" name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
        </div>
        <div className="col">
          <input type="number" className="form-control" name="price" placeholder="Precio" value={form.price} onChange={handleChange} />
        </div>
        <div className="col d-flex align-items-center">
          <div className="form-check">
            <input type="checkbox" name="stock" className="form-check-input me-1" checked={form.stock} onChange={handleChange} />
            <label className="form-check-label">Stock</label>
          </div>
          <div className="form-check ms-3">
            <input type="checkbox" name="isPromo" className="form-check-input me-1" checked={form.isPromo} onChange={handleChange} />
            <label className="form-check-label">Promoción</label>
          </div>
        </div>
        <div className="col">
          <button className="btn btn-success w-100" onClick={saveProduct}>
            {editId ? 'Actualizar' : 'Agregar'}
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Promoción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className={!p.stock ? 'table-warning' : ''}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>${parseFloat(p.price).toFixed(2)}</td>
              <td>{p.stock ? 'Sí' : 'No'}</td>
              <td>{p.isPromo ? 'Sí' : 'No'}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => editProduct(p)}>Editar</button>
                <button className="btn btn-sm btn-secondary me-2" onClick={() => toggleStock(p.id)}>
                  {p.stock ? 'Pausar' : 'Activar'}
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}