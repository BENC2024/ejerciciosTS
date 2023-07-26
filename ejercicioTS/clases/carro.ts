export class Carro {
    private modelo:number
    private placa:string
    private marca:string
    private puertas:number
    private color:string
    
    constructor(modelo:number, placa:string, puertas:number, marca:string, color:string){
        this.modelo = modelo
        this.placa = placa
        this.puertas = puertas
        this.marca = marca
        this.color = color
    }

    public getModelo():number{
        return this.modelo
    }
    public getPlaca():string{
        return this.placa
    }
    public getPuertas():number{
        return this.puertas
    }
    public getMarca():string{
        return this.marca
    }
    public getColor():string{
        return this.color
    }
    
    public setModelo(modelo:number){
        this.modelo = modelo
    }
    public setPlaca(placa:string){
        this.placa = placa
    }
    public setPuertas(puertas:number){
        this.puertas = puertas
    }
    public setMarca(marca:string){
        this.marca = marca
    }
    public setColor(color:string){
        this.color = color
    }


    public encender() {
        console.log("El carro encendió")
    }

    public desplazarCarro(){
        console.log("El carro esta en movimiento!")
    }
    



}
