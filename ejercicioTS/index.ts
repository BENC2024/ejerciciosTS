import { Carro } from "./clases/carro";

let carroSandra: Carro = new Carro(2023,"LWR 123",5,"renault","rojo")
let carroCharles: Carro = new Carro(2023,"POR 272",5,"ford","Blanco")
let carroBenc: Carro = new Carro(2023,"VIH 007",8,"Tesla","negro")

carroCharles.encender();
let placaCarroBenc: string = carroBenc.getPlaca();
console.log(placaCarroBenc);

console.log(carroBenc.getPlaca());

carroBenc.setPlaca("Herpes 123")
console.log(carroBenc.getPlaca());

console.log(carroSandra.getPlaca());
console.log(carroSandra.getModelo());
console.log(carroSandra.getColor());
console.log(carroSandra.getPuertas());
console.log(carroSandra.getMarca());

carroBenc.setColor("Amarrillo")
console.log(carroBenc.getColor());
