const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // Para servir el index.html

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/productos', (req, res) => {
  res.json(db.obtenerProductos());
});

app.post('/agregar', (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  db.agregarProducto(nombre, precio);
  res.status(201).json({ mensaje: 'Producto agregado' });
});

app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.eliminarProducto(id);
  res.status(200).json({ mensaje: 'Producto eliminado' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
