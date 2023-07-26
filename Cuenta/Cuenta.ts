export class Cuenta {

    private titular: string
    private valor: number

    constructor(tit: string, val: number) {
        this.titular = tit
        this.valor = val
    }

    public getTitular(): string{
        return this.titular
    }
    public getValor(): number{
        return this.valor
    }

    public setTitular(tit: string){
        this.titular = tit
    }
    public setValor(val: number){
        this.valor = val
    }

    /**
     * mostrar
     */
    public mostrarDatos() {
        console.log(this.valor)
        console.log(this.titular)
    }

    /**
     * ingresarCantidad
     */
    public ingresarCantidad(num: number) {
        if ( num < 0 ) {
            console.log("El numero ingresado no es valido")
        }
        else{
            this.valor = this.valor + num
            console.log("El nuevo valor es: "+this.valor)
        }
    }

    /**
     * retirarCantidad
     */
    public retirarCantidad(num: number) {
        if (num > this.valor) {
            console.log("No se puede retirar esa cantidad")
        }
        else{
            let valorNuevo = this.valor - num
            console.log("Valor actual: "+this.valor)
            console.log("Valor a retirar: "+num)
            console.log("Valor nuevo: "+valorNuevo)
            this.valor = valorNuevo

        }
    }
}