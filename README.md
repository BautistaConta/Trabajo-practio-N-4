# Ejercicio 2: Arquitectura de 3 Capas (3 Tier Architecture)

## Estructura del proyecto

- `index.html` → **Capa de presentación (UI)**  
  Contiene el formulario para ingresar productos y la lista visual.

- `backend.js` → **Capa de lógica de negocio**  
  Define las rutas que procesan las peticiones, y aplica validaciones.

- `db.js` → **Capa de acceso a datos**  
  Simula una base de datos en memoria. Gestiona la lista de productos.

## Ventajas respecto a la arquitectura monolítica

- ✅ Separación clara de responsabilidades.
- ✅ Facilita la lectura, el mantenimiento y la ampliación del código.
- ✅ Se pueden cambiar los datos (por ejemplo, usar MongoDB) sin afectar la UI ni la lógica.
- ✅ Es más fácil de testear en partes (por ejemplo, testear solo `db.js` o solo `backend.js`).
- ✅ Escalable para proyectos más grandes.

## Cómo ejecutar

1. Instalar dependencias:
```bash
npm init -y
npm install express
Debe entrar al http://localhost:3000

