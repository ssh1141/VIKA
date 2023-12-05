
function eliminarProducto (e) {
    const id = parseInt(e.currentTarget.id)
    const index = carrito.productosCarrito.findIndex(producto => producto.id === id)
    carrito.eliminarProducto(index)
    location.reload()
}

async function obtenerProductosCarrito() {
    try {
        cargarProductos(carrito.productosCarrito, contenedorCarrito)
        carrito.obtenerTotal()
        activarClick(".btn-delete", eliminarProducto)
    }catch {
     contenedorCarrito.innerHTML = errorDeCarga()
    }
}
obtenerProductosCarrito()












