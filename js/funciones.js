
// Funcion precio. Segun el codigo de prenda, dispara un alert con el precio de la misma.


function consultarPrenda() {
    let codigo = parseInt(prompt("Ingrese el codigo de la prenda a consultar"))
    let resultado = productos.find((producto) => producto.id === codigo)
    if (resultado === undefined) {
        alert("No se encontro el resultado que esperabas, intente nuevamente con otro codigo.")
    } else {
        alert("La prenda: " + resultado.nombre + " " + resultado.descripcion + " tiene un valor de: " + resultado.precio)
        return resultado
    }
}


function comprarPrenda() {
    let respuesta
    let resultado
    do {
        resultado = consultarPrenda()
        respuesta = confirm("¿Desea continuar con la compra?")
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
     console.log("El total de su compra es: " + total)
}


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









    /*
function facturar() {
    let consumidor
    do {
        consumidor = prompt("Para realizar la Factura indique si es consumidor final ingresando 'CF' o  si es empresa 'E'")
        if (consumidor != 'CF' && consumidor != 'E') {
            alert("Ingrese 'CF' o 'E' segun corresponda")
        }
    } while (consumidor != 'CF' && consumidor != 'E')

    if (consumidor === 'CF') {
        consumidorFinal()
    } else if (consumidor === 'E') {
        empresa()
    }
}

function consumidorFinal() {
    let nombreYapellido
    let documento
    let phone
    do {
        nombreYapellido = prompt("Por favor ingrese su nombre y apellido")
        documento = prompt("Por favor ingrese su DNI/nro. de identificaión")
        phone = prompt("Por favor ingrese su numero de telefono")
        if (nombreYapellido === "" || documento === "" || phone === "") {
            alert("¡Cuidado! La factura no puedo realizarse. No ingresaste los datos de manera correcta")
        }
    } while ((nombreYapellido === "" || documento === "" || phone === ""))

    nombreYapellido
    documento
    phone
    alert("FACTURA 'B':\n" +
        "Nombre y Apellido: \n" + nombreYapellido + "\n" +
        "DNI:" + documento + "\n" +
        "Telefono:" + phone + "\n" +
        "El total de su compra es: $" +  prenda.precio)
}



function empresa() {
    let nombreEmpresa
    let documento
    let phone
    do {
        nombreEmpresa = prompt("Por favor ingrese el nombre de su empresa")
        documento = prompt("Por favor ingrese el CUIT")
        phone = prompt("Por favor ingrese un número de telefono")
        if (nombreEmpresa === "" || documento === "" || phone === "") {
            alert("¡Cuidado! La factura no puedo realizarse. No ingresaste los datos de manera correcta")
        }
    } while ((nombreEmpresa === "" || documento === "" || phone === ""))

    nombreEmpresa
    documento
    phone
    alert("FACTURA A:\n" +
        "Nombre de Empresa: " + nombreEmpresa + "\n" +
        "CUIT: " + documento + "\n" +
        "Teléfono: " + phone + "\n" +
        "El total de su compra es: $" + prenda.precio + "\n" +
        "El total de su compra SIN IVA es: $" + (prenda.precio - (prenda.precio * iva21)))

}


let comprarMas = true;
do {
    comprarPrenda()
    let continuarComprando = confirm("¿Desea comprar o consultar otra prenda?")
    if (!continuarComprando) {
        comprarMas = false
    }
} while ((comprarMas))
*/