import { Soldado } from "./soldado"

export class Comandante{
    private nombre : string
    private rango : string
    private genero : string
    private listaSoldados: Array<Soldado>
    
    constructor(nombre:string, rango:string, genero:string) {
        this.nombre = nombre
        this.rango = rango
        this.genero = genero
        this.listaSoldados = []
    }

    //Push: Metodo para agregar datos a una lista
    //lista.push(valor a agregar datos)

    public getNombre():string {
        return this.nombre
    }
    public getRango():string {
        return this.rango
    }
    public getGenero():string {
        return this.genero
    }

    public setNombre(nombre:string){
        this.nombre = nombre
    }
    public setRango(rango:string) {
        this.rango = rango
    }
    public setGenero(genero:string){
        this.genero = genero
    }

    ingresarSoldado(soldado: Soldado){
        this.listaSoldados.push(soldado)
    }
    //Cantidad de soldados asignados para el comandante
    mostrarNumeroSoldadosaCargo(){
        return this.listaSoldados.length
    }

    informacionSoldados(){
        for (let i = 0; i < this.listaSoldados.length; i++) {
            console.log("---------------------")
            console.log( this.listaSoldados[i].mostrarSoldado())
        }
        console.log("---------------------")
        
    }


}

 /**
        console.log("---------------------")
        for (let i = 0; i < this.listaSoldados.length; i++) {
            console.log( this.listaSoldados[i].getNombre() + "\n" +
                         this.listaSoldados[i].getFechaInicio() + "\n" + 
                         this.listaSoldados[i].getGenero() )
            console.log("---------------------")
        }
         */