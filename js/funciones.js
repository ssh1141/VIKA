
// Funcion precio. Segun el codigo de prenda, dispara un alert con el precio de la misma.
/*

function consultarPrenda() {
    let codigo = parseInt(prompt("Ingrese el codigo de la prenda a consultar"))
    let resultado = productos.find((producto) => producto.id === parseInt(codigo))
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
        }else {
            calcularTotalCarrito()
        }
    } while (respuesta === true && resultado)
    return carrito
}


function calcularTotalCarrito (){
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
console.log(total)
}

function nuevoProductoValidando() {
    let nombre = prompt("Ingresa nombre del producto:").trim()
    let importe = prompt("Ingresa el importe del producto:")
    let categoria = prompt("Ingresa la categoría del producto:").trim()

    let existe = productos.some((producto)=> producto.nombre === nombre.toUpperCase())
        if (existe) {
            console.warn("El producto ya existe en el listado.")
        } else {
            const nuevoProducto = {id: crearID(), nombre: nombre, importe: importe, categoria: categoria}
            productos.push(nuevoProducto)
            console.table(nuevoProducto)
        }
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