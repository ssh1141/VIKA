function calcularTotalCarrito(datosCarrito) {
    const total = datosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    totalCompra.innerText = `Total(${datosCarrito.length}): $${total}`
}


async function obtenerProductosCarrito() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        cargarProductos(datosCarrito, contenedorCarrito)
        calcularTotalCarrito(datosCarrito)
        activarClick(".btn-delete", eliminarProducto)
    }catch {
     contenedorCarrito.innerHTML = errorDeCarga()
    }
}
obtenerProductosCarrito()

function msjToastFinal(mensaje) {
    Toastify({
        text: mensaje,
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #AF918A, #ECDDD9)",
        }
    }).showToast();
}



function eliminarProducto (e) {
    const id = parseInt(e.currentTarget.id)
    const index = datosCarrito.findIndex(producto => producto.id === id)
     if (index !== -1) {
        datosCarrito.splice(index, 1)
        localStorage.setItem("Carrito", JSON.stringify(datosCarrito))
        location.reload()
    }
}



