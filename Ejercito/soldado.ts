export class Soldado {

    private nombre : string
    private fechaInicio : string
    private genero : string
    
    constructor(nombre: string, fechaInicio: string, genero: string) {
        this.nombre = nombre
        this.fechaInicio = fechaInicio
        this.genero = genero
    }

    public getNombre(): string {
        return this.nombre
    }
    public getFechaInicio(): string {
        return this.fechaInicio
    }
    public getGenero(): string {
        return this.genero
    }


    public setNombre(nombre: string) {
        this.nombre = nombre
    }
    public setFechaInicio(fechaInicio: string){
        this.fechaInicio = fechaInicio
    }
    public setGenero(genero: string){
        this.genero = genero
    }

    mostrarSoldado(){
        return "Nombre: " + this.nombre + 
               "\nFecha: " + this.fechaInicio + 
               "\nGenero: " + this.genero 
    }

}