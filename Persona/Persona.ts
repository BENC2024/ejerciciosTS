export class Persona{

    private nombre: string
    private edad: number
    private telefono: number
    private direccion: string
    private ciudad: string

    constructor(name:string,year:number,telephone:number,direction:string,city:string){
        this.nombre = name
        this.edad = year
        this.telefono = telephone
        this.direccion = direction
        this.ciudad = city
    }

    public getNombre():string{
        return this.nombre
    }
    public getEdad():number{
        return this.edad
    }
    public getTelefono():number{
        return this.telefono
    }
    public getDireccion():string{
        return this.direccion
    }
    public getCiudad():string{
        return this.ciudad
    }

    public setNombre(name:string){
        this.nombre = name
    }
    public setEdad(year:number){
        this.edad = year
    }
    public setTelefono(telephone:number){
        this.telefono = telephone
    }
    public setDireccion(direction:string){
        this.direccion = direction
    }
    public setCiudad(city:string){
        this.ciudad = city
    }

    public mostrarDatos(){
        console.log(this.nombre)
        console.log(this.edad)
        console.log(this.telefono)
        console.log(this.direccion)
        console.log(this.ciudad)
    }
    public MayorEdad(ed:number){
        if (ed >= 18) {
            console.log("Es mayor de edad")
        }
        else{
            console.log("Es menor de edad")
        }
    }
    

}