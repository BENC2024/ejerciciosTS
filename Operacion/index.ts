import { Operacion } from "./Operacion";

let operacion1 = new Operacion(4,6)
console.log( operacion1.sumar( operacion1.getNumero1(), operacion1.getNumero2() ) )
console.log( operacion1.restar( operacion1.getNumero1(), operacion1.getNumero2() ) )
console.log( operacion1.multiplicar( operacion1.getNumero1(), operacion1.getNumero2() ) )
console.log( operacion1.dividir( operacion1.getNumero1(), operacion1.getNumero2() ) )

let operacion2 = new Operacion(14,30)
console.log( operacion2.sumar( operacion2.getNumero1(), operacion2.getNumero2() ) )
console.log( operacion2.restar( operacion2.getNumero1(), operacion2.getNumero2() ) )
console.log( operacion2.multiplicar( operacion2.getNumero1(), operacion2.getNumero2() ) )
console.log( operacion2.dividir( operacion2.getNumero1(), operacion2.getNumero2() ) )

let operacion3 = new Operacion(2,30)
console.log( operacion3.sumar( operacion3.getNumero1(), operacion3.getNumero2() ) )
console.log( operacion3.restar( operacion3.getNumero1(), operacion3.getNumero2() ) )
console.log( operacion3.multiplicar( operacion3.getNumero1(), operacion3.getNumero2() ) )
console.log( operacion3.dividir( operacion3.getNumero1(), operacion3.getNumero2() ) )

let operacion4 = new Operacion(5,13)
console.log( operacion4.sumar( operacion4.getNumero1(), operacion4.getNumero2() ) )
console.log( operacion4.restar( operacion4.getNumero1(), operacion4.getNumero2() ) )
console.log( operacion4.multiplicar( operacion4.getNumero1(), operacion4.getNumero2() ) )
console.log( operacion4.dividir( operacion4.getNumero1(), operacion4.getNumero2() ) )

let operacion5 = new Operacion(8,1)
console.log( operacion5.sumar( operacion5.getNumero1(), operacion5.getNumero2() ) )
console.log( operacion5.restar( operacion5.getNumero1(), operacion5.getNumero2() ) )
console.log( operacion5.multiplicar( operacion5.getNumero1(), operacion5.getNumero2() ) )
console.log( operacion5.dividir( operacion5.getNumero1(), operacion5.getNumero2() ) )
