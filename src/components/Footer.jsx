import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Tienda React - Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
