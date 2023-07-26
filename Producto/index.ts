import { Producto } from "./producto";

let listaProductos: Producto[] = [
    new Producto(10001,"Arroz","libra",2000,"Colombia",20),
    new Producto(10002,"Azucar","libra",1500,"Ecuador",20),
    new Producto(10003,"Cafe","pequeña",5500,"Brasil",20),
    new Producto(10004,"Huevos","granja",15000,"Argentina",20),
    new Producto(10005,"Sal","libra",2000,"Panamá",20),
];

let cantidadProductos = listaProductos.length
let totalPrecio: number = 0

for (let index = 0; index < listaProductos.length; index++) {
    totalPrecio = totalPrecio + listaProductos[index].getPrecio()
}

console.log("La cantidad de productos ingresados fueron: "+cantidadProductos)
console.log("El precio total de los productos ingresados fueron: "+totalPrecio)