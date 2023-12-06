const contenedorCarrito = document.querySelector("#contenedor-2")
const totalCompra = document.querySelector("#total-compra")


function mostrarTotal () {
   const total = carrito.obtenerTotal()
   totalCompra.innerText = `Total(${carrito.productosCarrito.length}): $${total}`
}

function cardProductoCarrito(producto) {
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

function eliminarProducto(e) {
  const id = parseInt(e.currentTarget.id)
  const index = carrito.productosCarrito.findIndex(producto => producto.id === id)
  carrito.eliminarProducto(index)
  location.reload()
}

function finalizarCompra() {
if(carrito.productosCarrito.length != []) {

  const contenidoHTML = carrito.resumenCarrito() 

  Swal.fire({
    title: 'Ultimo paso...¡Confirmá tu compra!',
    html: contenidoHTML,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Comprar',
    cancelButtonText: 'Continuar comprando',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '¡Tu compra se realizo con exito!',
        'Gracias por elegirnos',
        'VIKA'
      )
      carrito.vaciarCarrito()
    }
  })} else {

  sweatToast('Debes agregar productos al carrito para finalizar la compra', 'error')

 }
}




async function inciarCarrito() {
  try {
    cargarProductos(carrito.productosCarrito, contenedorCarrito)
    mostrarTotal()
    activarClick(".btn-delete", eliminarProducto)
    activarClick(".btn-comprar", finalizarCompra)

  } catch {
    contenedorCarrito.innerHTML = errorDeCarga()
  }
}

inciarCarrito()








