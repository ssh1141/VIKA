//Funciones compartidas. 
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
                array.forEach((producto) => contenedor.innerHTML += cardHTML(producto))
            } else {
                array.forEach((producto) => contenedor.innerHTML += cardHTMLCarrito(producto))
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
