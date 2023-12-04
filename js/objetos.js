
class Prendas {
    constructor(id,nombre, descripcion, color, talle,categoria, precio, stock,imagen) {
        this.id = parseInt(id)
        this.nombre = nombre
        this.descripcion = descripcion
        this.color = color
        this.talle = talle
        this.categoria = categoria 
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)
        this.imagen = imagen
    }
}



class Carrito {
   constructor () {

    this.productos = []
   }
}


productos.push(new Carrito(...data))

