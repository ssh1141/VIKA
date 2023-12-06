//Funciones compartidas
const contenedorCard = document.querySelector("#productos")
const carrito = new Carrito()

function errorDeCarga() {
    return `<div class="d-flex justify-content-center align-items-center" style="height:70vh;">
    <div>
        <h5>No hay productos</h5>
    </div>
</div>
`
}

function cargarProductos(array, contenedor) {
        if (array && array.length > 0) {
            contenedor.innerHTML = ""
            if (contenedor === contenedorCard) {
                array.forEach((producto) => contenedor.innerHTML += cardProducto(producto))
            } else {
                array.forEach((producto) => contenedor.innerHTML += cardProductoCarrito(producto))
            }
        } else {
            contenedor.innerHTML = errorDeCarga()
        }
    }


function activarClick(clase, funcion) {
    const botonAccion = document.querySelectorAll(clase)
    botonAccion.forEach((boton) => {
        boton.addEventListener("click", funcion)
    })
}

function sweatToast(mensaje, icono) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      })
      
      Toast.fire({
        icon: icono,
        title: mensaje

      })
}