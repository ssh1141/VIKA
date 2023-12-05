const contenedorCard = document.querySelector("#productos")
const contenedorCarrito = document.querySelector("#contenedor-2")

const btnIrCarrito = document.querySelector("button#ir-carrito")
const btnRefesh = document.querySelector("#refesh")
const btnComprar = document.querySelector("#btn-comprar")


const productos = []
const URL = "js/productos.json"
const carrito = new Carrito()

const totalCompra = document.querySelector("#total-compra")
const lengthCarrito = document.querySelector("#cantidad-carrito")