# Tienda React con Panel de Administración (CRUD)

Este proyecto es una aplicación web desarrollada con **React**, que simula una **tienda online** con carrito de compras, sección de promociones y un **panel de administración (CRUD)** accesible solo para usuarios con rol de **Administrador**.

---

## **Características principales**
- **Autenticación básica** (usuario: `admin`, contraseña: `admin`).
- **Persistencia de sesión** usando `localStorage`.
- **CRUD de productos** (crear, leer, actualizar, eliminar).
- **Vista de promociones** con productos marcados como `isPromo: true`.
- **Carrito de compras persistente** con `localStorage`.
- **Diseño responsive** usando Bootstrap 5.
- **Protección de rutas** usando `React Router`.

---

## **Tecnologías utilizadas**
- [React 18+](https://reactjs.org/)
- [React Router v6](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## **Prácticas aplicadas**
- Componentización con React.
- Hooks: `useState`, `useEffect`, `useNavigate`, `useLocation`.
- Rutas protegidas (`ProtectedRoute`).
- Persistencia de estado en `localStorage`.
- Uso de props para comunicación entre componentes.
- Separación de lógica de negocio y componentes UI.

---

## **Estructura de archivos**
```
src/
├── App.jsx                # Definición de rutas y estado global
├── main.jsx               # Punto de entrada de la app
├── components/
│   ├── Header.jsx         # Barra de navegación con control de sesión
│   ├── Footer.jsx         # Pie de página
│   ├── ProductList.jsx    # Listado de todos los productos
│   ├── Promotions.jsx     # Listado filtrado de promociones
│   ├── ProductCard.jsx    # Tarjeta de producto con control de stock
│   ├── Cart.jsx           # Vista del carrito de compras
│   ├── Login.jsx          # Pantalla de login
│   ├── AdminPanel.jsx     # CRUD de productos
│   ├── ProtectedRoute.jsx # Componente de ruta protegida
│   ├── About.jsx          # Página informativa
│   └── data/
│       ├── products.js    # Productos iniciales
│       └── promotions.js  # Promociones iniciales
├── styles/
│   └── style.css          # Estilos adicionales
└── index.css              # Estilos base
```

---

## **Instalación y uso**

### **1. Clonar el repositorio**
```bash
git clone https://github.com/Mick28/Talento-Tech.git
cd Talento-Tech
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Iniciar la aplicación en modo desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en:
```
http://localhost:5173/
```
(o el puerto asignado por Vite).

### **4. Credenciales de acceso al Panel de Administración**
- **Usuario:** `admin`
- **Contraseña:** `admin`

---

## **Build para producción**
```bash
npm run build
```

---

## **Autor**: Miguel Angel Escurra
Desarrollado como práctica de un proyecto full stack con autenticación, CRUD, consumo de datos, carrito de compras y diseño responsivo con React + Bootstrap.
