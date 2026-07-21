# Product Catalog

Aplicación web desarrollada con React para consumir un catálogo de productos, permitiendo consultar productos, filtrarlos, administrar un carrito de compras y ofrecer una interfaz responsiva.

El proyecto fue desarrollado siguiendo principios de separación de responsabilidades, desacoplamiento y escalabilidad, utilizando una arquitectura modular basada en funcionalidades (Feature-Based Architecture).

---

# Tecnologías

- React
- Vite
- TypeScript
- React Query (TanStack Query)
- Axios
- Context API
- Material UI
- React Router DOM

---

# Funcionalidades

- Consulta del catálogo de productos desde el backend.
- Carrito de compras administrado localmente.
- Persistencia del carrito mediante localStorage.
- Actualización inmediata de la interfaz al agregar o eliminar productos.
- Manejo explícito de estados de carga, error y vacío.
- Diseño responsivo.

---

# Arquitectura

La aplicación utiliza una arquitectura basada en módulos (Feature-Based Architecture), donde cada funcionalidad agrupa todos sus elementos relacionados (componentes, hooks, repositorios y tipos).

Esta organización facilita:

- Separación de responsabilidades.
- Reutilización.
- Escalabilidad.
- Mantenimiento.
- Bajo acoplamiento entre módulos.

```
src/
│
├── api/
│   ├── axios.ts
│   └── productsApi.ts
│
├── features/
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── repository/
│   │   └── types/
│   │
│   └── cart/
│       ├── components/
│       ├── hooks/
│       ├── context/
│       ├── reducer/
│       └── types/
│
├── pages/
│   └── Home/
│       ├── Home.tsx
│       └── index.ts
│
├── shared/
│   ├── components/
│   ├── utils/
│   └── constants/
│
├── routes/
│
└── App.tsx
```

---

# Flujo de la aplicación

## Catálogo de productos

```
Home

↓

useProducts()

↓

ProductRepository

↓

ProductsApi

↓

Backend
```

## Carrito de compras

```
ProductCard

↓

CartContext

↓

useReducer

↓

localStorage
```

---

# Descripción de la arquitectura

## API

Contiene la comunicación con el backend mediante Axios.

Responsabilidades:

- Consultar productos.

---

## Features

Cada funcionalidad mantiene agrupadas todas sus responsabilidades.

### Products

Contiene todo lo relacionado con el catálogo.

Incluye:

- Componentes
- Hooks
- Repository
- Tipos

#### ProductRepository

Responsabilidades:

- Obtener productos.
- Adaptar respuestas del backend.
- Centralizar el acceso a la API.

---

### Cart

Contiene todo lo relacionado con el carrito.

Incluye:

- Componentes
- Context
- Repository
- Tipos

#### CartContext

Responsabilidades:

- Compartir el estado global del carrito.
- Exponer operaciones del carrito.
- Notificar cambios a la interfaz.

---

## Shared

Contiene elementos reutilizables por toda la aplicación.

Ejemplos:

- Componentes comunes.
- Utilidades.
- Constantes.
- Helpers.

---

## Pages

Representan las pantallas principales de la aplicación.

Cada página compone los distintos componentes pertenecientes a cada módulo.

---

# Manejo del estado

La aplicación utiliza dos estrategias para administrar la información.

## Estado remoto

React Query administra la información obtenida desde el backend.

Beneficios:

- Caché automática.
- Refetch.
- Invalidación de consultas.
- Estados de carga.
- Manejo de errores.

## Estado global

Context API administra el carrito de compras al ser un estado compartido entre diferentes componentes.

---

# Carrito de compras

El carrito se administra completamente del lado del cliente.

Las operaciones de agregar y eliminar productos actualizan inmediatamente la interfaz de usuario y posteriormente persisten la información mediante localStorage.

Esta decisión mantiene desacoplada la lógica de almacenamiento y facilita una futura integración con un backend sin afectar la capa de presentación.


# Diseño Responsivo

La interfaz fue desarrollada utilizando Material UI y un sistema de Grid responsivo para ofrecer una experiencia consistente

---

# Decisiones de diseño

## React Query

Se utiliza para administrar el estado remoto debido a sus capacidades de caché, sincronización automática y manejo de estados asíncronos.

## Context API

Se utiliza para administrar el estado global del carrito evitando prop drilling.

## Repository Pattern

Cada módulo implementa una capa Repository para abstraer el origen de los datos.

Actualmente:

- ProductRepository consume la API del backend.

Este enfoque permite modificar el origen de los datos sin afectar la lógica de negocio ni los componentes.

## Feature-Based Architecture

La aplicación se organiza por funcionalidades en lugar de por tipo de archivo.

Este enfoque facilita:

- Escalar el proyecto.
- Mantener el código relacionado en un mismo lugar.
- Reducir el acoplamiento entre módulos.
- Mejorar la mantenibilidad del proyecto.

---

# Consideraciones

El backend disponible expone únicamente el catálogo de productos, incluyendo filtrado por categoría y paginación.

Por este motivo, el carrito de compras se implementa completamente del lado del cliente utilizando localStorage.

La arquitectura mantiene desacoplado el acceso a datos mediante el patrón Repository, permitiendo incorporar una sincronización con el backend en futuras iteraciones sin modificar la capa de presentación.

# Cómo ejecutar

```bash
yarn install
yarn dev
```

```
http://localhost:5173/
```