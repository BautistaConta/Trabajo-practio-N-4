const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lista en memoria
let productos = [];

// Página HTML con formulario y lista de productos
app.get('/', (req, res) => {
  let listaHTML = productos.map(p => `<li>${p.nombre} - $${p.precio}</li>`).join('');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Productos</title>
        <style>
          body { font-family: Arial; margin: 2em; }
          input, button { margin-top: 0.5em; display: block; }
          ul { margin-top: 1em; }
        </style>
      </head>
      <body>
        <h1>Agregar Producto</h1>
        <form action="/agregar" method="POST">
          <input type="text" name="nombre" placeholder="Nombre del producto" required />
          <input type="number" name="precio" placeholder="Precio" required />
          <button type="submit">Agregar</button>
        </form>
        <h2>Lista de Productos</h2>
        <ul>
          ${listaHTML}
        </ul>
      </body>
    </html>
  `);
});

// Ruta POST para agregar producto
app.post('/agregar', (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).send('Faltan datos');
  }

  productos.push({ id: productos.length + 1, nombre, precio });
  res.redirect('/');
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

/*
¿Por qué esta implementación es monolítica?

Todo el código está en un único archivo (`app.js`): la lógica del servidor, la interfaz visual (HTML),
el manejo de formularios, la lista en memoria y las rutas están mezclados sin separación de capas.
No hay archivos separados para vistas, controladores ni modelos.

Desventajas de esta estructura:

- A medida que el proyecto crece, el código se vuelve difícil de mantener y leer.
- No hay separación de responsabilidades, lo que complica el trabajo en equipo y la depuración.
- Dificulta el reuso de componentes o la integración con otras tecnologías modernas.
*/
