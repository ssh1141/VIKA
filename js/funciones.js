
function consultarPrenda() {
    let codigo = parseInt(prompt("Ingrese el codigo de la prenda a consultar"))
    let resultado = productos.find((producto) => producto.id === codigo)
    if (resultado === undefined) {
        alert("No se encontro el resultado que esperabas, intente nuevamente con otro codigo.")
    } else {
        alert("La prenda: " + resultado.nombre + "\n" +" Descripcion: " + resultado.descripcion +"\n" +" Color: "+resultado.color+ "\n" +" Tiene un valor de: $" + resultado.precio + "\n" )
        return resultado
    }
}


function comprarPrenda() {
    let respuesta
    let resultado
    do {
        resultado = consultarPrenda()
        respuesta = confirm("¿Desea realizar la compra?")
        if (respuesta === true) {
            carrito.push(resultado)
        } else {
            calcularTotalCarrito()
        }
    } while (respuesta === true && resultado)
    return carrito
}


function calcularTotalCarrito() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
     console.log("El total de su compra es de: $" + total)
}





//Funciones que usare mas adelante

function usuarioNuevo () {
      let nombre = prompt("Ingese su nombre")
      let apellido = prompt("Ingese su apellido")
      let dni = parseInt(prompt("Ingese su dni"))
      let email = prompt("Ingese su email")

    let existe = usuarios.some((usuario)=> usuario.dni === dni)
     if (existe) {
        console.warn("Ya existe un usuario creado con ese numero de documento")
     }else {
        const nuevoUsuario = {nombre:nombre, apellido:apellido,dni:dni, email:email}
        usuarios.push(nuevoUsuario)
        console.table(nuevoUsuario)
     }
}

function nuevoProducto() {
    let nombre = prompt("Ingresa nombre del producto:").toUpperCase().trim()
    let descripcion = prompt("Ingresa la descripcion del producto:").toUpperCase()
    let color = prompt("Ingresa el color del producto:").toUpperCase().trim()
    let talle = prompt("Ingresa el talle del producto:").toUpperCase().trim()
    let categoria = prompt("Ingresa la categoría del producto:").toUpperCase()
    let precio= parseInt(prompt("Ingresa el precio del producto:").toUpperCase().trim())
    let stock = parseInt(prompt("Ingresa el stock actual del producto:")).trim()

    let existe = productos.some((producto)=> producto.nombre === nombre.toUpperCase())

        if (existe) {
            console.warn("El producto ya existe en el listado.")
        } else {
            const nuevoProducto = {id: 1234, nombre: nombre, descripcion:descripcion, color:color, talle:talle, categoria:categoria, precio:precio,stock:stock, vendido:false}
            productos.push(nuevoProducto)
            console.table(nuevoProducto)
            console.table(productos)
        }
}

function filtrarProductos() {
        let cat = prompt("Ingresa la categoría de los productos a filtrar:").toUpperCase()
        let resultado = productos.filter((producto)=> producto.categoria === cat)
        console.table(resultado)
    }
