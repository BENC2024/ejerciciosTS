import { Producto } from "./producto";

let listaProductos = new Array<Producto>

let producto1 = new Producto(10001,"Arroz","libra",2000,"Colombia",20)
let producto2 = new Producto(10002,"Azucar","libra",1500,"Ecuador",25)
let producto3 = new Producto(10003,"Cafe","pequeña",5500,"Brasil",10)
let producto4 = new Producto(10004,"Huevos","granja",15000,"Argentina",12)
let producto5 = new Producto(10005,"Sal","libra",2000,"Panamá",6)

listaProductos.push(producto1,producto2,producto3,producto4,producto5)

let cantidadProductos = listaProductos.length
let totalPrecio: number = 0

for (let i = 0; i < listaProductos.length; i++) {
    totalPrecio = totalPrecio + listaProductos[i].getPrecio()
}

console.log("La cantidad de productos ingresados fueron: "+cantidadProductos)
console.log("El precio total de los productos ingresados fueron: "+totalPrecio)


/**
let listaProductos: Producto[] = [
    new Producto(10001,"Arroz","libra",2000,"Colombia",20),
    new Producto(10002,"Azucar","libra",1500,"Ecuador",25),
    new Producto(10003,"Cafe","pequeña",5500,"Brasil",10),
    new Producto(10004,"Huevos","granja",15000,"Argentina",12),
    new Producto(10005,"Sal","libra",2000,"Panamá",6),
];

let cantidadProductos = listaProductos.length
let totalPrecio: number = 0

for (let index = 0; index < listaProductos.length; index++) {
    totalPrecio = totalPrecio + listaProductos[index].getPrecio()
}

console.log("La cantidad de productos ingresados fueron: "+cantidadProductos)
console.log("El precio total de los productos ingresados fueron: "+totalPrecio)
 */