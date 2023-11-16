
const contenedor = document.querySelector("#productos.productos")

/*
function consultarPrenda() {
    let codigo = parseInt(prompt("Ingrese el codigo de la prenda a consultar"))
    let resultado = productos.find((producto) => producto.id === codigo)
    if (resultado === undefined) {
        alert("No se encontro el resultado que esperabas, intente nuevamente con otro codigo.")
    } else {
        alert("La prenda: " + resultado.nombre + "\n" + " Descripcion: " + resultado.descripcion + "\n" + " Color: " + resultado.color + "\n" + " Tiene un valor de: $" + resultado.precio + "\n")
        return resultado
    }
}

function comprarPrenda() {
    let resultado = consultarPrenda()
    let respuesta = confirm("¿Desea realizar la compra?")

    if (respuesta === true && resultado) {
        carrito.push(resultado)

        let respuesta = confirm("¿Deseas elegir otra prenda?")
        if (respuesta === true) {
            comprarPrenda()
        } else {
            calcularTotalCarrito()
        }
    }
}

*/

function calcularTotalCarrito() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    console.log("El total de su compra es de: $" + total)
}



////////incluyendo DOM para agregar CARDS al document
/*
//Le pedimos al usuario que cargue el producto.
function nuevoProducto() {
    let nombre = prompt("Ingresa nombre del producto:").toUpperCase().trim()
    let descripcion = prompt("Ingresa la descripcion del producto:").toUpperCase()
    let color = prompt("Ingresa el color del producto:").toUpperCase().trim()
    let talle = prompt("Ingresa el talle del producto:").toUpperCase().trim()
    let categoria = prompt("Ingresa la categoría del producto:").toUpperCase()
    let precio = parseInt(prompt("Ingresa el precio del producto:").toUpperCase().trim())
    let stock = parseInt(prompt("Ingresa el stock actual del producto:")).trim()
    let imagen = prompt("Ingrese la ruta de la imagen").trim()

    let existe = productos.some((producto) => producto.nombre === nombre.toUpperCase())

    if (existe) {
        console.warn("El producto ya existe en el listado.")
    } else {
        let producto = new Prendas(1234,nombre,descripcion,color,talle,categoria,precio,stock,imagen)
        productos.push(producto)
        console.table(producto)
        console.table(productos)
    }
}
*/


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
              <button class="boton-añadir" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
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
        contenedor.innerHTML = ""
        productos.forEach((producto)=> contenedor.innerHTML += crearCardHTML(producto))
        activarClick()
    }
}

function activarClick(){
 const botonAgregar = document.querySelectorAll("button.boton-añadir")
  botonAgregar.forEach((boton) => {
         boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.id)
            const productoSeleccionado = productos.find((producto)=> producto.id === id)
            carrito.push(productoSeleccionado)
            console.table(carrito)
         })
  })
}




/*
//Funciones que usare mas adelante

function usuarioNuevo() {
    let nombre = prompt("Ingese su nombre")
    let apellido = prompt("Ingese su apellido")
    let dni = parseInt(prompt("Ingese su dni"))
    let email = prompt("Ingese su email")

    let existe = usuarios.some((usuario) => usuario.dni === dni)
    if (existe) {
        console.warn("Ya existe un usuario creado con ese numero de documento")
    } else {
        const nuevoUsuario = { nombre: nombre, apellido: apellido, dni: dni, email: email }
        usuarios.push(nuevoUsuario)
        console.table(nuevoUsuario)
    }

}

function filtrarProductos() {
    let cat = prompt("Ingresa la categoría de los productos a filtrar:").toUpperCase()
    let resultado = productos.filter((producto) => producto.categoria === cat)
    console.table(resultado)
}

*/