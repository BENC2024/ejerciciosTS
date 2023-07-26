export class Operacion{

    private numero1: number
    private numero2: number

    constructor(num1: number, num2: number){
        this.numero1 = num1
        this.numero2 = num2
    }

    public getNumero1():number{
        return this.numero1
    }
    public getNumero2():number{
        return this.numero2
    }

    public setNumero1(num1: number){
        this.numero1 = num1
    }
    public setNumero2(num2: number){
        this.numero2 = num2
    }

    public sumar(a:number, b:number){
        return a + b
    }
    public restar(a:number, b:number){
        return a - b
    }
    public multiplicar(a:number, b:number){
        return a * b
    }
    public dividir(a:number, b:number){
        return a / b
    }

}