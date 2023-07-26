import { Persona } from "./Persona";

let person1 = new Persona("Ramiro",25,123456,"Cr 12 No 15-6","Popayán");
person1.mostrarDatos()
person1.MayorEdad(person1.getEdad())

let person2 = new Persona("Sara",27,246810,"Cr 13 No 5-60","Popayán");
person2.mostrarDatos()
person2.MayorEdad(person2.getEdad())

let person3 = new Persona("Alex",17,2589631,"Cr 1 No 5-10","Cali");
person3.mostrarDatos()
person3.MayorEdad(person3.getEdad())

let person4 = new Persona("Jose",40,7894560,"Cr 9 No 20-4","Pasto");
person4.mostrarDatos()
person4.MayorEdad(person4.getEdad())

let person5 = new Persona("Juan",16,158870,"Cr 20 No 8-6","Bogotá");
person5.mostrarDatos()
person5.MayorEdad(person5.getEdad())
