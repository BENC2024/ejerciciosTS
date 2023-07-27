import { Comandante } from "./comandante"
import { Soldado } from "./soldado"

let comandante1 = new Comandante("Yimerson","Teniente","Masculino")

console.log( comandante1.getNombre() )

let soldado1 = new Soldado("Ryan","01/01/2021","Masculino")
let soldado2 = new Soldado("Sandra","07/12/2021","Femenino")
let soldado3 = new Soldado("Juan Poche","27/07/2023","Masculino")

comandante1.ingresarSoldado(soldado2)
comandante1.ingresarSoldado(soldado1)

console.log("El comandante tiene "+comandante1.mostrarNumeroSoldadosaCargo()+" soldados a cargo")

comandante1.ingresarSoldado(soldado3)

console.log("El comandante tiene "+comandante1.mostrarNumeroSoldadosaCargo()+" soldados a cargo")

comandante1.informacionSoldados()