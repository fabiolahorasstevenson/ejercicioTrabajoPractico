import { TrabajoPractico } from "./classTabajoPractico";
import { Errores } from "./classErrores";

 export class Alumno{
    private nombre: string;
    //private trabajoPracticos: TrabajoPractico[];
    private respuestas: string[];

    public constructor(pNombre: string, pRespuestas: string[]) {
        this.nombre = pNombre; 
        //this.trabajoPracticos = pTrabajoPractico;
        this.respuestas = pRespuestas;
    } 

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre: string): void {
        if (pNombre===''){
            throw new Error("No se puede agregar nombres vacíos");
        }
        else{
            this.nombre = pNombre;
        }
    }
/*
    public getTrabajoPracticos(): TrabajoPractico[] {
        return this.trabajoPracticos;
    }

    public setTrabajoPracticos(trabajoPracticos: TrabajoPractico[]): void {
        this.trabajoPracticos = trabajoPracticos;
    }
*/
    public getRespuestas(): string[] {
        return this.respuestas;
    }

    public setRespuestas(respuestas: string[]): void {
        this.respuestas = respuestas;
    }

    public realizarTabajoPractico(pTrabajoParactico: TrabajoPractico, pRespuestas: string[]): boolean {
        //Recorrer las preguntas
        let realizado: boolean = true;
        console.log("El trabajo práctico se ha hecho");
        return realizado;

     }
/*
    private buscar(pTrabajoParactico: TrabajoPractico): boolean {
        for (let i = 0; i < this.trabajoPracticos.length; i++) {
            if (this.trabajoPracticos[i] === pTrabajoParactico) {
                return true; 
            }
        }
        return false;
    }
*/
 }