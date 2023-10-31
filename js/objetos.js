class Prendas {
    constructor(id,nombre, descripcion, color, talle, precio, stock) {
        this.id = parseInt(id)
        this.nombre = nombre
        this.descripcion = descripcion
        this.color = color
        this.talle = talle
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)
        this.vendido = false
    }

    vender() {
        return this.vendido = true
    }

    consultarprecio() {
        alert("La prenda " +this.nombre +" tiene el valor de $: "+ this.precio)
    }

}






