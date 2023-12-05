function cardHTML(producto) {
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


function cardHTMLCarrito (producto) {
    return `<div class="carta-producto">
            <div class="img-producto">
                <img src="${producto.imagen}"  alt="${producto.descripcion}">
            </div>
            <div class="info-producto">
                <h5>${producto.nombre}</h5>
                <h6>$ ${producto.precio}</h6>
            </div>
            <div class="button">
              <button class="btn-delete" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg></button>
            </div>
        </div>`
}


function errorDeCarga() {
    return `<div class="d-flex justify-content-center align-items-center" style="height:70vh;">
    <div>
        <h5>No hay productos</h5>
    </div>
</div>
`
}


function cargarProductos(array, contenedor) {
    if (contenedor) {
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
}


function msjToast(mensaje) {
    Toastify({
        text: mensaje,
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #AF918A, #ECDDD9)",
        }
    }).showToast();
}

function activarClick(clase, funcion) {
    const botonAccion = document.querySelectorAll(clase)
    botonAccion.forEach((boton) => {
        boton.addEventListener("click", funcion)
    })
}


function agregarProductoCarrito(e) {
    const id = parseInt(e.currentTarget.id)
    const productoSeleccionado = productos.find((producto) => producto.id === id)
    carrito.agregarProducto(productoSeleccionado)
    msjToast(`${productoSeleccionado.nombre} se agregó al carrito!`)
}

/*
function cargarArrayCarrito(productoSeleccionado) {
    productoSeleccionado ? carrito.push(productoSeleccionado)
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}
*/


function filtrarProductos(e) {
    const categoria = e.currentTarget.id
    const resultado = productos.filter((producto) => producto.categoria === categoria)
    contenedorCard.innerHTML = ""
    cargarProductos(resultado, contenedorCard)
}

activarClick(".filtrar", filtrarProductos)


 
async function obtenerProductos() {     
     try {
        const response = await fetch(URL)
        const data = await response.json()
        productos.push(...data)
        cargarProductos(productos, contenedorCard)
        btnRefesh.addEventListener("click", () => location.reload())
        activarClick("button.boton-add", agregarProductoCarrito)
        lengthCarrito.innerHTML = `Carrito(${carrito.productosCarrito.length})`
       }    
       catch {
        contenedorCard.innerHTML = errorDeCarga()
       }
}

obtenerProductos()






