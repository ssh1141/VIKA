/* La idea es  que el cliente pueda consultar el precio, decidir si quiere realizar la compra,
en funcion de su respuesta y si es "Empresa" o "Consumidor final" se le pide los datos para "facturar". 
El proceso debe volver a iniciarse luego de una compra realizada o una cancelacion de consulta/compra.
*/

let precioPrenda = 0
const iva21 = 0.21  

function precio(codigo) {
    switch (codigo) {
        case 10:
            alert("El precio de la remera 'Mar' es $10500 (Con IVA)")
            precioPrenda = 10500
            break
        case 20:
            console.log("El precio del pantalon 'Lara' es de $20.100 (Con IVA)")
            precioPrenda = 20100
            break
        case 30:
            console.log("El precio del top 'Juana' es de $7500 (Con IVA)")
            precioPrenda = 7500
            break
        case 40:
            console.log("El precio del chaleco 'Tojo' es de $ 25000 (Con IVA)")
            precioPrenda = 25000
            break
        case 50:
            console.log("El precio del cinturon 'Ari' es de $ 5000 (Con IVA)")
            precioPrenda = 5000
            break
        default:
            console.log("¡Intentalo de nuevo ingresando un código válido!")
            return false

    }
    return true
}


function comprarPrenda() {
    let codigoPrenda

    do {
       alert("Debes ingresar un código válido.")
       codigoPrenda = parseInt(prompt("Ingrese el código de la prenda que quiera consultar:\n10. Remera 'Mar'\n20. Pantalón 'Lara'\n30. Top 'Juana'\n40. Chaleco 'Tojo'\n50. Cinturón 'Ari'\n Debera abrir la consola para una mejor experiencia."))
    } while (!precio(codigoPrenda))

        let respuesta = confirm("¿Desea realizar la compra?")
        if (respuesta === true) {      
            facturar()
       }
}


function facturar() {
    let consumidor
    do {
    consumidor = prompt("Para realizar la Factura indique si es consumidor final ingresando 'CF' o  si es empresa 'E'")
       if (consumidor != 'CF' && consumidor != 'E') {
        alert("Ingrese 'CF' o 'E' segun corresponda")
       } 
    }while (consumidor != 'CF' && consumidor != 'E') 

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
    do{ 
        nombreYapellido = prompt("Por favor ingrese su nombre y apellido")
        documento = prompt("Por favor ingrese su DNI/nro. de identificaión")
        phone = prompt("Por favor ingrese su numero de telefono")
        if (nombreYapellido==="" || documento==="" || phone===""){ 
         alert("¡Cuidado! La factura no puedo realizarse. No ingresaste los datos de manera correcta")
        }
    } while ((nombreYapellido==="" || documento==="" || phone===""))  

    nombreYapellido 
    documento 
    phone
    alert("FACTURA 'B':\n" + 
    "Nombre y Apellido: \n" + nombreYapellido + "\n" +
    "DNI:" + documento + "\n" + 
    "Telefono:" + phone + "\n" + 
    "El total de su compra es: $"+precioPrenda)
}


    
function empresa() {
    let nombreEmpresa
    let documento
    let phone
    do {
    nombreEmpresa = prompt("Por favor ingrese el nombre de su empresa")
    documento = prompt("Por favor ingrese el CUIT")
    phone = prompt("Por favor ingrese un número de telefono")
      if (nombreEmpresa==="" || documento==="" || phone==="") {
        alert("¡Cuidado! La factura no puedo realizarse. No ingresaste los datos de manera correcta")
      }
   }while((nombreEmpresa==="" || documento==="" || phone===""))
     
    nombreEmpresa
    documento
    phone
    alert("FACTURA A:\n" + 
    "Nombre de Empresa: " + nombreEmpresa + "\n" +
    "CUIT: " + documento + "\n" +
    "Teléfono: " + phone + "\n" +
    "El total de su compra es: $" + precioPrenda + "\n" +
    "El total de su compra SIN IVA es: $" + (precioPrenda - (precioPrenda * iva21)))
    
}


let comprarMas = true;
do {
    comprarPrenda()
    let continuarComprando = confirm("¿Desea comprar o consultar otra prenda?")
    if (!continuarComprando) {
        comprarMas = false
    }
}while((comprarMas))
