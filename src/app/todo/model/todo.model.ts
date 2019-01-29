export class Todo {
    public id: number;
    
    public completado: boolean;

    constructor(public texto: string){
        this.completado = false;    
        this.id = Math.random();
        this.texto = this.texto.charAt(0).toUpperCase() + this.texto.slice(1);
    }
}