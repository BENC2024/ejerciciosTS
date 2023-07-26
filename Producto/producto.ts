export class Producto{
    private identificador : number
    private nombre : string
    private tipo : string
    private precio : number
    private pais : string
    private cantidad : number

    constructor(id:number,nombre:string,tipo:string,precio:number,pais:string,cantidad:number){
        this.identificador = id
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
        this.pais = pais
        this.cantidad = cantidad
    }

    public getIdentificador(): number{
        return this.identificador
    }
    public getNombre(): string{
        return this.nombre
    }
    public getTipo(): string{
        return this.tipo
    }
    public getPrecio(): number{
        return this.precio
    }
    public getPais(): string{
        return this.pais
    }
    public getCantidad(): number{
        return this.cantidad
    }

    public setIdentificador(id: number){
        this.identificador = id
    }
    public setNombre(nombre: string){
        this.nombre = nombre
    }
    public setTipo(tipo: string){
        this.tipo = tipo 
    }
    public setPrecio(precio: number){
        this.precio = precio
    }
    public setPais(pais: string){
        this.pais = pais
    }
    public setCantidad(cantidad: number){
        this.cantidad = cantidad
    } 
    /**
     * Array: De una o muchas dimensiones
     * Los vectores inicializan en 0
     * En matrices inicializan en 0,0 (fila,columna)
     * Variables personalizadas
     * array<producto>
     */

    
}