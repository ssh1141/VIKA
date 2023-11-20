
const contenedor = document.querySelector("#productos.productos")
const botonAdd = document.querySelector("button#guardar")
//const contenedor2 = document.querySelector(".contenedor-carrito")

function calcularTotalCarrito() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    console.log("El total de su compra es de: $" + total)
}

//Con esta funcion creamos la card HTML que luego sera representada en el document
function crearCardHTML(producto) {
    return `<div class="carta-producto">
            <div class="img-producto">
                <img src="${producto.imagen}">
            </div>
            <div class="info-producto">
                <h5>${producto.nombre}</h5>
                <h6>$ ${producto.precio}</h6>
            </div>
            <div class="button">
              <button class="boton-add" id="${producto.id}">+</button>
            </div>
        </div>`
}


//Enlazamos el array que creamos a partir del evento click

function cargarProductos() {
    if (productos.length > 0) {
        productos.forEach((producto) => contenedor.innerHTML += crearCardHTML(producto))
        activarClick()
    }
}
cargarProductos()


function activarClick() {
    const botonAgregar = document.querySelectorAll("button.boton-add")
    botonAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.id)
          //  console.log("ID del producto clickeado:", id) //console.log para verificar
            const productoSeleccionado = productos.find((producto) => producto.id === id)
            if (productoSeleccionado) {
                carrito.push(productoSeleccionado)
              //  console.log("Producto agregado al carrito:", carrito)  //console.log para verificar
                console.log(carrito)
                return carrito
            } else {
                console.log('Producto no encontrado')
            }

        })
    })
}


//// JSON y LocalStorage

function guardarDatosCarrito() {
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}

// agrego un "escuchador" de evento
botonAdd.addEventListener("click", guardarDatosCarrito)




//Funciones que usare luego
/*

function filtrarProductos() {
    let cat = prompt("Ingresa la categoría de los productos a filtrar:").toUpperCase()
    let resultado = productos.filter((producto) => producto.categoria === cat)
    console.table(resultado)
}




/////////////////////////////

//JS carrito?

//*Primero recupero local storage
function recuperarDatosCarrito() {
    let datosCarrito = JSON.parse(localStorage.getItem("Carrito"))
    if(datosCarrito.length > 0) {
        datosCarrito.forEach((producto) => contenedor.innerHTML += crearCardHTML(producto))
    } 
}

// Y luego uso esta funcion)??

function crearCarrito(producto) {
    return ` <div class="contenedor-productos-carrito">
    <div class="carta-producto-carrito">
        <div class="img-producto-carrito">
            <img src="${producto.imagen}">
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
    </div>
</div>`
}

*/