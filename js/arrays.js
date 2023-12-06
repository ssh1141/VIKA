//Documento no enlazado, uso para administracion de archivo JSON 

/*
const productos = [
    { id: 4650, nombre: "BLAIR", descripcion: "BLUSA CON NUDO", color: "CAMEL", categoria: "REMERAS", precio: 7000,  imagen: "img/prendas/41.jpg" },
    { id: 4651, nombre: "TOP BA", descripcion: "TOP CON ARGOLLA", color: "NEGRO", categoria: "REMERAS", precio: 7500,  imagen: "img/prendas/39.jpg" },
    { id: 4652, nombre: "MUSCULOSA LEOPARDA", descripcion: "MUSCULOSA ESTAMPADA", color: "ESTAMPA",categoria: "REMERAS", precio: 6500,  imagen: "img/prendas/37.jpg" },
    { id: 4653, nombre: "TOP FRAN", descripcion: "TOP CON FRUNCE", color: "NEGRO",  categoria: "REMERAS", precio: 4500,imagen: "img/prendas/29.jpg" },
    { id: 4654, nombre: "REMERA INDIANA", descripcion: "REMERA MANGA CORTA", color: "TERRACOTA", categoria: "REMERAS", precio: 5800,  imagen: "img/prendas/30.jpg" },
    { id: 4655, nombre: "MUSCULOSA KIRA III", descripcion: "MUSCULOSA DE MORLEY", color: "BLANCO", categoria: "REMERAS", precio: 7500,imagen: "img/prendas/16.jpg" },
    { id: 4656, nombre: "MUSCULOSA KIRA II", descripcion: "MUSCULOSA DE MORLEY", color: "GRIS",  categoria: "REMERAS", precio: 6500, imagen: "img/prendas/3.jpg" },
    { id: 4657, nombre: "BIKER ANY", descripcion: "BIKER DE MORLEY", color: "NEGRO",  categoria: "SHORT", precio: 10500, imagen: "img/prendas/23.jpg" },
    { id: 4658, nombre: "BIKER MALVA", descripcion: "BIKER DE LYCRA", color:"BLANCO",  categoria: "SHORT", precio: 11500,  imagen: "img/prendas/20.jpg" },
    { id: 4659, nombre: "TOP M&NTA", descripcion: "TOP MICROFIBRA CON TIRITAS", color: "CAMEL", categoria: "REMERASS", precio: 5500,imagen: "img/prendas/12.jpg" },
    { id: 4660, nombre: "TOP KAILIN", descripcion: "CORTE AMERICANO", color: "NEGRO",  categoria: "REMERAS", precio: 5000,  imagen: "img/prendas/42.jpg" },
    { id: 4661, nombre: "BANDO GINEBRA", descripcion: "CON FRUNCE Y LAZO AL COSTADO", color: "CAMEL", categoria: "REMERAS", precio: 5500,  imagen: "img/prendas/28.jpg" },
    { id: 4662, nombre: "POLERA", descripcion: "POLERA ALGODON", color: "BEIGE", categoria: "REMERAS", precio: 4500, imagen: "img/prendas/1.jpg" },
    { id: 4663, nombre: "WAYRA II", descripcion: "MUSCULOSA WAYRA", color: "BEIGE",categoria: "REMERAS", precio: 7500,  imagen: "img/prendas/6.jpg" },
    { id: 4664, nombre: "MUSCULOSA WAYRA", descripcion: "MUSCULOSA ALGODON", color: "NEGRA", categoria: "REMERAS", precio: 5500,  imagen: "img/prendas/7.jpg" },
    { id: 4665, nombre: "MUSCULOSA ASIMETRICA", descripcion: "MUSCULOSA ALGODON", color: "NEGRA", categoria: "REMERAS", precio: 6500,  imagen: "img/prendas/9.jpg" },
    { id: 4667, nombre: "MUSCULOSA LEOPARDA II", descripcion: "MUSCULOSA ESTAMPADA", color: "ESTAMPA",  categoria: "REMERAS", precio: 6500, imagen: "img/prendas/36.jpg" },
    { id: 4668, nombre: "MUSCULOSA LEOPARDA III", descripcion: "MUSCULOSA ESTAMPADA", color: "ESTAMPA", categoria: "REMERAS", precio: 6500,  imagen: "img/prendas/35.jpg" },
    { id: 4669, nombre: "TOP JOY", descripcion: "TOP ENGOMADO", color: "NEGRO", categoria: "REMERAS", precio: 6500,  imagen: "img/prendas/25.jpg" },
    { id: 4670, nombre: "REMERA LAILA", descripcion: "REMERA NEGRA", color: "NEGRO", categoria: "REMERAS", precio: 5500,  imagen: "img/prendas/27.jpg" },
    { id: 4671, nombre: "SHORT CANCUN", descripcion: "SHORT ALGODON", color: "BEIGE", categoria: "SHORT", precio: 15000,  imagen: "img/prendas/45.jpg" },
    { id: 4672, nombre: "BIKER MARIA", descripcion: "BIKERS ALGODON", color: "BEIGE", categoria: "SHORT", precio: 10500,  imagen: "img/prendas/46.jpg" },
    { id: 4673, nombre: "SHORT MONA", descripcion: "SHORTS ALGODON SPORT", color: "BEIGE", categoria: "SHORT", precio: 11500,  imagen: "img/prendas/47.jpg" },
    { id: 4674, nombre: "MEDIAS SMILE", descripcion: "MEDIAS ALGODON", color: "BEIGE", categoria: "ACCESORIOS", precio: 2500,  imagen: "img/prendas/48.jpg" },
    { id: 4675, nombre: "MEDIAS BASICS", descripcion: "MEDIAS ALGODON", color: "BEIGE", categoria: "ACCESORIOS", precio: 2500,  imagen: "img/prendas/49.jpg" },
    { id: 4676, nombre: "LENTES LUCK", descripcion: "LENTES DE SOL", color: "BEIGE", categoria: "ACCESORIOS", precio: 15000,  imagen: "img/prendas/50.jpg" },
    { id: 4677, nombre: "MEDIAS BASICS II", descripcion: "MEDIAS ALGODON", color: "BEIGE", categoria: "ACCESORIOS", precio: 2500,  imagen: "img/prendas/51.jpg" },
    { id: 4678, nombre: "LENTES CHARM", descripcion: "LENTES DE SOL", color: "BEIGE", categoria: "ACCESORIOS", precio: 15000,  imagen: "img/prendas/52.jpg" },
    { id: 4679, nombre: "LENTES CHARM", descripcion: "LENTES DE SOL", color: "BEIGE", categoria: "ACCESORIOS", precio: 15000,  imagen: "img/prendas/53.jpg" },
    { id: 4680, nombre: "LENTES CHARM", descripcion: "LENTES DE SOL", color: "BEIGE", categoria: "ACCESORIOS", precio: 15000,  imagen: "img/prendas/54.jpg" },
    { id: 4681, nombre: "SHORT SASTRE", descripcion: "SHORT SASTRERO", color: "BEIGE", categoria: "SHORT", precio: 17500,  imagen: "img/prendas/55.jpg" },
    { id: 4682, nombre: "SHORT SASTRE II", descripcion: "SHORT SASTRERO", color: "BEIGE", categoria: "SHORT", precio: 17500,  imagen: "img/prendas/56.jpg" }]

*/
