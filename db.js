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

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
}

module.exports = {
  agregarProducto,
  obtenerProductos,
  eliminarProducto
};
