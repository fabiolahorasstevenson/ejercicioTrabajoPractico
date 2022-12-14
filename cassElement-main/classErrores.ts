export class Errores extends Error{
    public constructor(pMensaje: string) {
        super(pMensaje);
        this.name = "Error";
        }
        
}