// Lista en memoria (simula base de datos)
let productos = [];

function agregarProducto(nombre, precio) {
  const producto = {
    id: productos.length + 1,
    nombre,
    precio
  };
  productos.push(producto);
}

function obtenerProductos() {
  return productos;
}

module.exports = {
  agregarProducto,
  obtenerProductos
};
