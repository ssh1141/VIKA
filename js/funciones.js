
const contenedorCard = document.querySelector("#productos.productos")
const contenedorCarrito = document.querySelector("#contenedor-supremo")
const btnIrCarrito = document.querySelector("button#ir-carrito")
let datosCarrito = JSON.parse(localStorage.getItem("Carrito"))
const productos = []
const carrito = []
const URL = "js/productos.json"



function crearCardHTML(producto) {
    return `<div class="carta-producto">
            <div class="img-producto">
                <img src="${producto.imagen}"  alt="${producto.descripcion}">
            </div>
            <div class="info-producto">
                <h5>${producto.nombre}</h5>
                <h6>$ ${producto.precio}</h6>
            </div>
            <div class="button">
              <button class="boton-add" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg></button>
            </div>
        </div>`
}


function CarritoVacio() {
    return `<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div>
        <h5>El carrito está vacío</h5>
    </div>
</div>
`
}


function cargarProductos(array, contenedor) {
    if (contenedor) {
        if (array && array.length > 0) {
            contenedor.innerHTML = ""
            array.forEach((producto) => contenedor.innerHTML += crearCardHTML(producto))
        } else {
            contenedor.innerHTML = CarritoVacio()
        }
    }
}
cargarProductos(productos, contenedorCard)
activarClick("button.boton-add",cargarCarrito)



function mensajeToast(mensaje) {
    Toastify({
        text: mensaje,
        duration: 6000,
        style: {
          background: estilo,
        }
      }).showToast()
}



function activarClick(clase, funcion) {
    const botonAgregar = document.querySelectorAll(clase)
    botonAgregar.forEach((boton) => {
        boton.addEventListener("click", funcion)
    })
}

function cargarCarrito (e) {
        const id = parseInt(e.currentTarget.id)
        const productoSeleccionado = productos.find((producto) => producto.id === id)
        cargarArrayCarrito(productoSeleccionado)
        mensajeToast(`${productoSeleccionado.nombre} se agregó al carrito`, "#D8B696")
    }

function cargarArrayCarrito(productoSeleccionado) {
    productoSeleccionado ? carrito.push(productoSeleccionado) : console.log('Producto no encontrado')
    guardarDatosCarrito()
    
}



//// JSON y LocalStorage

function guardarDatosCarrito() {
    localStorage.setItem("Carrito", JSON.stringify(carrito))
    
}

//Cargar productos al carrito.

cargarProductos(datosCarrito, contenedorCarrito)



function filtrarProductos(e) {
    const categoria = e.currentTarget.id
    const resultado = productos.filter((producto) => producto.categoria === categoria)
    contenedorCard.innerHTML = ""
    cargarProductos(resultado, contenedorCard)
}
activarClick(".filtrar", filtrarProductos)


/*
********Funciones que usare luego*******

function calcularTotalCarrito() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    console.log("El total de su compra es de: $" + total)
}
*/