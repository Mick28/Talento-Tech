import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header({ cartCount }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const isAuth = localStorage.getItem("auth") === "true";

  // Función para aplicar estilo activo en el enlace actual
  const getLinkClass = (path) =>
    `nav-link me-4 ${location.pathname === path ? "active fw-bold" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">TiendaReact</Link>

        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className={getLinkClass("/")} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass("/promotions")} to="/promotions">Promociones</Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass("/about")} to="/about">Acerca de nosotros</Link>
          </li>
          {isAuth && (
            <li className="nav-item">
              <Link className={getLinkClass("/admin")} to="/admin">Administración</Link>
            </li>
          )}
          {!isAuth && (
            <li className="nav-item">
              <Link className={getLinkClass("/login")} to="/login">Login</Link>
            </li>
          )}
        </ul>

        <div className="d-flex align-items-center">
          <Link className="btn btn-outline-light me-3" to="/cart">
            🛒 Carrito ({cartCount})
          </Link>
          {isAuth && (
            <>
              <span className="text-light me-3">
                <i className="bi bi-person-circle me-1"></i> Bienvenido, <strong>Admin</strong>
              </span>
              <button className="btn btn-danger" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-1"></i> Cerrar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
