import { Cuenta } from './Cuenta';

let cuenta = new Cuenta("Aquiles Baesa",1500000);

cuenta.mostrarDatos()
cuenta.ingresarCantidad(-2000)
cuenta.ingresarCantidad(2000)
cuenta.retirarCantidad(5000000)
cuenta.retirarCantidad(500000)