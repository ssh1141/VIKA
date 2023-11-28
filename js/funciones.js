
const contenedorCard = document.querySelector("#productos.productos")
const contenedorCarrito = document.querySelector("#contenedor-supremo")
const btnIrCarrito = document.querySelector("button#ir-carrito")
let datosCarrito = JSON.parse(localStorage.getItem("Carrito"))


//Con esta funcion creamos la card HTML que luego sera representada en el document
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


//Enlazamos el array que creamos a partir del evento click
/*
function cargarProductos(array, contenedor) {
    if (array.length > 0) {
        array.forEach((producto) =>  contenedor.innerHTML += crearCardHTML(producto))
        activarClick()
    }
}

*/

function cargarProductos(array, contenedor) {
    if (contenedor) {
        if (array && array.length > 0) {
            array.forEach((producto) => contenedor.innerHTML += crearCardHTML(producto))
            
        } else {
            alert("El carrito está vacío")
        }
    }
}
cargarProductos(productos, contenedorCard)
activarClick()  


function activarClick() {
    const botonAgregar = document.querySelectorAll("button.boton-add")
    botonAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.currentTarget.id)
            const productoSeleccionado = productos.find((producto) => producto.id === id)
            AddCarrito(productoSeleccionado)
        })
    })
}

function AddCarrito(productoSeleccionado) {
    productoSeleccionado ? carrito.push(productoSeleccionado) : console.log('Producto no encontrado')  ////// OPERADOR TERNADRIO
    guardarDatosCarrito()
}

//// JSON y LocalStorage

function guardarDatosCarrito() {
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}

/*
function cargarProductos2() {
    if (contenedorCarrito) {
        if (datosCarrito && datosCarrito.length > 0) {
            datosCarrito.forEach((producto) => contenedorCarrito.innerHTML += crearCardHTML(producto))
        } else {
            alert("El carrito está vacío")
        }
    } else {
        console.error("No se encontró el elemento con ID 'contenedor-supremo'")

    }

}
*/

cargarProductos(datosCarrito, contenedorCarrito )




/*
function recuperarDatosCarrito() {
    datosCarrito = JSON.parse(localStorage.getItem("Carrito"))
    return datosCarrito            
}
*/

/*
********Funciones que usare luego*********


function filtrarProductos() {
    let cat = prompt("Ingresa la categoría de los productos a filtrar:").toUpperCase()
    let resultado = productos.filter((producto) => producto.categoria === cat)
    console.table(resultado)
}

function calcularTotalCarrito() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    console.log("El total de su compra es de: $" + total)
}



/////////////////////////////

//JS carrito?

//*Primero recupero local storage
function recuperarDatosCarrito() {
    let datosCarrito = JSON.parse(localStorage.getItem("Carrito"))
    if(datosCarrito.length > 0) {
        datosCarrito.forEach((producto) => .innerHTML += crearCardHTML(producto))
    } 
}




   <div class="container-md contenedor-productos-carrito">
            <div class="carta-producto-carrito">
                <img class="img-producto-carrito" src="img\prendas\6.jpg" alt="imagen de la prenda">
                <div class="info-producto-carrito">
                    <h5 class="nombre-producto-carrito"><b>Nombre producto</b></h5>
                    <h6 class="nombre-producto-carrito">$1500</h6>
                </div>
                <div class="boton-carrito">
                    <button class="boton-delete" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                            height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg></button>
                </div>
            </div>

        </div>








// Y luego uso esta funcion)??

function crearCarrito(producto) {
    return `
    <div class="carta-producto-carrito">
        <div class="img-producto-carrito">
            <img src="${producto.imagen} alt="${producto.descripcion}">
        </div>
        <div class="info-producto-carrito">
            <h5>${producto.nombre}</h5>
            <h6>${producto.precio}</h6>
        </div>
        <div class="button-carrito">
          <button class="boton-delete" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
        </div>
    </div>`
}

*/