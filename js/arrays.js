/*
productos.push(new Prendas(4650, "BLAIR", "BLUSA CON NUDO", "CAMEL", "M", "REMERAS", 4000, 10,"img/prendas/41.jpg"))
productos.push(new Prendas(4651, "TOP BA", "TOP CON ARGOLLA", "NEGRO", "S", "REMERAS", 3500, 10,"img/prendas/39.jpg"))
productos.push(new Prendas(4652, "MUSCULOSA LEOPARDA", "MUSCULOSA ESTAMPADA", "ESTAMPA", "M", "REMERAS", 3000, 10,"img/prendas/37.jpg"))
productos.push(new Prendas(4653, "TOP FRAN", "TOP CON FRUNCE", "NEGRO", "M", "REMERAS", 4500, 10,"img/prendas/29.jpg"))
productos.push(new Prendas(4654, "REMERA INDIANA", "REMERA MANGA CORTA", "TERRACOTA", "L", "REMERAS", 5000, 10,"img/prendas/30.jpg"))
productos.push(new Prendas(4655, "MUSCULOSA KIRA III", "MUSCULOSA DE MORLEY", "BLANCO", "S", "REMERAS", 4500, 10,"img/prendas/16.jpg"))
productos.push(new Prendas(4656, "MUSCULOSA KIRA II", "MUSCULOSA DE MORLEY", "GRIS", "S", "REMERAS", 4500, 10,"img/prendas/3.jpg"))
productos.push(new Prendas(4657, "BIKER ANY", "BIKER DE MORLEY", "NEGRO", "M", "BIKER", 4500, 10,"img/prendas/23.jpg"))
productos.push(new Prendas(4658, "BIKER MALVA", "BIKER DE LYCRA", "BLANCO", "M", "BIKER", 4500, 10,"img/prendas/20.jpg"))
productos.push(new Prendas(4659, "TOP M&NTA", "TOP MICROFIBRA CON TIRITAS", "CAMEL", "M", "SIN MANGAS", 5000, 10,"img/prendas/12.jpg"))
productos.push(new Prendas(4660, "TOP KAILIN", "CORTE AMERICANO", "NEGRO", "S", "SIN MANGAS", 4000, 10,"img/prendas/42.jpg"))
productos.push(new Prendas(4661, "BANDO GINEBRA", "CON FRUNCE Y LAZO AL COSTADO", "CAMEL", "S", "SIN MANGAS", 3500, 10,"img/prendas/28.jpg"))
*/


const productos = [
    { id: 4650, nombre: "BLAIR", descripcion: "BLUSA CON NUDO", color: "CAMEL", talle: "M", categoria: "REMERAS", precio: 4000, sotck: 10, imagen: "img/prendas/41.jpg" },
    { id: 4651, nombre: "TOP BA", descripcion: "TOP CON ARGOLLA", color: "NEGRO", talle: "S", categoria: "REMERAS", precio: 3500, sotck: 10, imagen: "img/prendas/39.jpg" },
    { id: 4652, nombre: "MUSCULOSA LEOPARDA", descripcion: "MUSCULOSA ESTAMPADA", color: "ESTAMPA", talle: "M", categoria: "REMERAS", precio: 3000, sotck: 10, imagen: "img/prendas/37.jpg" },
    { id: 4653, nombre: "TOP FRAN", descripcion: "TOP CON FRUNCE", color: "NEGRO", talle: "M", categoria: "REMERAS", precio: 4500, sotck: 10, imagen: "img/prendas/29.jpg" },
    { id: 4654, nombre: "REMERA INDIANA", descripcion: "REMERA MANGA CORTA", color: "TERRACOTA", talle: "L", categoria: "REMERAS", precio: 5000, sotck: 10, imagen: "img/prendas/30.jpg" },
    { id: 4655, nombre: "MUSCULOSA KIRA III", descripcion: "MUSCULOSA DE MORLEY", color: "BLANCO", talle: "S", categoria: "REMERAS", precio: 4500, sotck: 10, imagen: "img/prendas/16.jpg" },
    { id: 4656, nombre: "MUSCULOSA KIRA II", descripcion: "MUSCULOSA DE MORLEY", color: "GRIS", talle: "S", categoria: "REMERAS", precio: 4500, sotck: 10, imagen: "img/prendas/3.jpg" },
    { id: 4657, nombre: "BIKER ANY", descripcion: "BIKER DE MORLEY", color: "NEGRO", talle: "M", categoria: "BIKER", precio: 4500, sotck: 10, imagen: "img/prendas/23.jpg" },
    { id: 4658, nombre: "BIKER MALVA", descripcion: "BIKER DE LYCRA", color:"BLANCO", talle: "M", categoria: "BIKER", precio: 4500, sotck: 10, imagen: "img/prendas/20.jpg" },
    { id: 4659, nombre: "TOP M&NTA", descripcion: "TOP MICROFIBRA CON TIRITAS", color: "CAMEL", talle: "M", categoria: "REMERASS", precio: 5000, sotck: 10, imagen: "img/prendas/12.jpg" },
    { id: 4660, nombre: "TOP KAILIN", descripcion: "CORTE AMERICANO", color: "NEGRO", talle: "S", categoria: "REMERAS", precio: 4000, sotck: 10, imagen: "img/prendas/42.jpg" },
    { id: 4661, nombre: "BANDO GINEBRA", descripcion: "CON FRUNCE Y LAZO AL COSTADO", color: "CAMEL", talle: "S", categoria: "REMERAS", precio: 3500, sotck: 10, imagen: "img/prendas/28.jpg" },
    { id: 4661, nombre: "POLERA", descripcion: "POLERA ALGODON", color: "BEIGE", talle: "S", categoria: "REMERAS", precio: 3500, sotck: 10, imagen: "img/prendas/1.jpg" },
    { id: 4661, nombre: "WAYRA II", descripcion: "MUSCULOSA WAYRA", color: "BEIGE", talle: "S", categoria: "REMERAS", precio: 4500, sotck: 10, imagen: "img/prendas/6.jpg" },
    { id: 4661, nombre: "MUSCULOSA WAYRA", descripcion: "MUSCULOSA ALGODON", color: "NEGRA", talle: "S", categoria: "REMERAS", precio: 2500, sotck: 10, imagen: "img/prendas/7.jpg" },
    { id: 4661, nombre: "MUSCULOSA ASIMETRICA", descripcion: "MUSCULOSA ALGODON", color: "NEGRA", talle: "S", categoria: "REMERAS", precio: 2500, sotck: 10, imagen: "img/prendas/9.jpg" },
    { id: 4661, nombre: "BIKER", descripcion: "BIKER DE ALGODON", color: "NEGRA", talle: "M", categoria: "BIKER", precio: 5500, sotck: 10, imagen: "img/prendas/20.jpg" },
    { id: 4652, nombre: "MUSCULOSA LEOPARDA II", descripcion: "MUSCULOSA ESTAMPADA", color: "ESTAMPA", talle: "M", categoria: "REMERAS", precio: 3000, sotck: 10, imagen: "img/prendas/36.jpg" },
    { id: 4652, nombre: "MUSCULOSA LEOPARDA III", descripcion: "MUSCULOSA ESTAMPADA", color: "ESTAMPA", talle: "M", categoria: "REMERAS", precio: 3000, sotck: 10, imagen: "img/prendas/35.jpg" }]



const carrito = []




