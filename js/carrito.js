function calcularTotalCarrito(datosCarrito) {
    const total = datosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    totalCompra.innerText = `Total(${datosCarrito.length}): $${total}`
}


function obtenerProductosCarrito() {
    fetch(URL)
     .then(() => cargarProductos(datosCarrito, contenedorCarrito))
     .then(() => calcularTotalCarrito(datosCarrito))
     .then(() => activarClick(".btn-delete", eliminarProducto))
     .catch(() => contenedorCarrito.innerHTML = errorDeCarga())
}
obtenerProductosCarrito()


function eliminarProducto (e) {
    const id = parseInt(e.currentTarget.id)
    const index = datosCarrito.findIndex(producto => producto.id === id)
     if (index !== -1) {
        datosCarrito.splice(index, 1)
        localStorage.setItem("Carrito", JSON.stringify(datosCarrito))
        //despues de 1 segundo reload
        location.reload()
        
    }
}


