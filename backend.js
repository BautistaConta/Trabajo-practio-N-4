const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
app.use(express.json());

// Servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta lógica: agregar producto
app.post('/agregar', (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  db.agregarProducto(nombre, precio);
  res.status(201).json({ mensaje: 'Producto agregado' });
});

// Ruta lógica: obtener productos
app.get('/productos', (req, res) => {
  const productos = db.obtenerProductos();
  res.json(productos);
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
