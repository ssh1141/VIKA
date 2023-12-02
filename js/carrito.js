function calcularTotalCarrito(datosCarrito) {
    const total = datosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    totalCompra.innerText = `Total(${datosCarrito.length}): $${total}`
}


function obtenerProductosCarrito() {
    fetch(URL)
     .then(() => cargarProductos(datosCarrito, contenedorCarrito))
     .then(() => calcularTotalCarrito(datosCarrito))
     .catch(() => contenedorCarrito.innerHTML = errorDeCarga())
}
obtenerProductosCarrito()


/*
function eliminarProducto (e) {
    const id = parseInt(e.currentTarget.id)
    console.log(id)
    const index = carrito.findIndex(producto => producto.id === id)
    console.log(index)
    if (index !== -1) {
        carrito.splice(index, 1);
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        location.reload()
    }
}
activarClick(".btn-delete", eliminarProducto)

*/