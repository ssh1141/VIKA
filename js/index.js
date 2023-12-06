const btnIrCarrito = document.querySelector("button#ir-carrito")
const btnRefesh = document.querySelector("#refesh")

const productos = []
const URL = "js/productos.json"

const lengthCarrito = document.querySelector("#cantidad-carrito")
const encabezado = document.querySelector(".encabezado")



async function obtenerProductos() {     
     try {
        const response = await fetch(URL)
        const data = await response.json()
        productos.push(...data)
        cargarProductos(productos, contenedorCard)
        activarClick("button.boton-add", agregarProductoCarrito)
       }    
       catch {
        sweatToast(`¡Lo sentimos! Tuvimos problemas con cargar la pagina, intentelo de nuevo mas tarde.`,'error')
       }
}


function cardProducto(producto) {
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


function agregarProductoCarrito(e) {
    const id = parseInt(e.currentTarget.id)
    const productoSeleccionado = productos.find((producto) => producto.id === id)
    carrito.agregarProducto(productoSeleccionado)
    sweatToast(`${productoSeleccionado.nombre} se agregó al carrito!`,'success')

}

function filtrarProductos(e) {
    const categoria = e.currentTarget.id
    const resultado = productos.filter((producto) => producto.categoria === categoria)
    contenedorCard.innerHTML = ""
    encabezado.innerHTML = `${categoria}`
    cargarProductos(resultado, contenedorCard)
    activarClick("button.boton-add", agregarProductoCarrito)
}

 


//ejecutamos las funciones
obtenerProductos()
activarClick(".filtrar", filtrarProductos)

//boton para ver todos los productos
btnRefesh.addEventListener("click", () => location.reload())


lengthCarrito.innerHTML = `Carrito(${carrito.productosCarrito.length})`




