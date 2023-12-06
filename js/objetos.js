class Carrito {
    constructor() {
        this.productosCarrito = JSON.parse(localStorage.getItem("Carrito")) || [];
    }

    agregarProducto(producto) {
        this.productosCarrito.push(producto)
        this.actualizarLocalStorage()
    }

    eliminarProducto(index) {
        if (index !== -1) {
            this.productosCarrito.splice(index, 1)
            this.actualizarLocalStorage()
        }
    }

    vaciarCarrito() {
        this.productosCarrito = []
        this.actualizarLocalStorage()
        setTimeout(() => location.reload() , 2000)
    }

    obtenerTotal() {
         const total = this.productosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
         totalCompra.innerText = `Total(${this.productosCarrito.length}): $${total}`
    }

    actualizarLocalStorage() {
        localStorage.setItem("Carrito", JSON.stringify(this.productosCarrito))
}

}

