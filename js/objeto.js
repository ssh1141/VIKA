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
        setTimeout(() => location.reload(), 3000)
    }

    obtenerTotal() {
        const total = this.productosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        return total
    }

    resumenCarrito() {
        const nombresYPrecios = this.productosCarrito.map(producto => ({ nombre: producto.nombre, precio: producto.precio }))
        const contenidoHTML1 = nombresYPrecios.map(({ nombre, precio }) => `
        <ul>
        <hr>  
       <li class ="lista">Producto: ${nombre}</li>
       <li class ="lista">Precio: $${precio}</li>
        </ul>`).join('')

        const resumenTotal = `
           ${contenidoHTML1}
           <hr>
           <div>Total: $${carrito.obtenerTotal()}</div>
        `
        return resumenTotal
    }

    actualizarLocalStorage() {
        localStorage.setItem("Carrito", JSON.stringify(this.productosCarrito))
    }

}

