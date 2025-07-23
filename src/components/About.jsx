import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>Acerca de la Tienda</h1>
      <p>
        Bienvenido a nuestra tienda de productos. Este proyecto es una demo
        construida con React, Bootstrap y React Router.
      </p>
      <p>
        Puedes navegar por nuestros productos, añadirlos al carrito y acceder a
        una sección administrativa protegida (user = admin, pass = admin)😉.
      </p>
      <p>
        Proyecto desarrollado como práctica de una aplicación full stack con
        autenticación, manejo de estado y consumo de datos.
      </p>
    </div>
  );
};

export default About;
