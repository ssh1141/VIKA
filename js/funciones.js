
const contenedor = document.querySelector("#productos.productos")
const botonAdd = document.querySelector("button#guardar")

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
                <h6>${producto.precio}</h6>
            </div>
            <div class="button">
              <button class="boton-add" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
            </svg></button>
            </div>
        </div>`
}


/*
Enlazamos el array que creamos a partir del evento click 
y con la magia de JS y DOM se vera reflejado en el document
*/

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
            console.log("ID del producto clickeado:", id) //console.log para verificar
            const productoSeleccionado = productos.find((producto) => producto.id === id)
            if (productoSeleccionado){
                carrito.push(productoSeleccionado)  
                console.log("Producto agregado al carrito:", carrito)
                console.log(carrito)
                return carrito
            }else {
                console.log('Producto no encontrado')
            }
            
        })
    })
}



//// JSON y LocalStorage

function recuperarDatosCarrito() {
    let datosCarrito = JSON.parse(localStorage.getItem("Carrito"))
    console.log(datosCarrito)
}

function guardarDatosCarrito() {
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}

// agrego un "escuchador" de evento
botonAdd.addEventListener("click",guardarDatosCarrito)






//Funcion que usare lugo
/*

function filtrarProductos() {
    let cat = prompt("Ingresa la categoría de los productos a filtrar:").toUpperCase()
    let resultado = productos.filter((producto) => producto.categoria === cat)
    console.table(resultado)
}

*/