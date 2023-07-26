export class Car {
    private year: number
    private color: string
    
    constructor(anio: number, colour: string) {
        this.year = anio
        this.color = colour
    }

    public getYear():number{
        return this.year
    }
    public getColor():string{
        return this.color
    }

    public setYear(anio:number){
        this.year = anio
    }
    public setColor(colour:string){
        this.color = colour
    }

    public start() : void{
    }
    public accelerate() : void{
    }
    public stop() : void{
    }

}