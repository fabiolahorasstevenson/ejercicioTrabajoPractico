import { Alumno } from "./classAlumno";

export class Seminario {
    private tema: string;
    private temaRequisitos: string[];
    private alumnos: Alumno[];

    public constructor(paramTema: string, paramTemaRequisitos: string[]) {
        this.tema = paramTema;
        this.temaRequisitos = paramTemaRequisitos;
    }

    public seminario (pTema: string): void{
        this.tema = pTema;
    }

    public addRequisito(temaRequisitos: string[], pTema: string): boolean{
        var repetido = false;
        for (var i = 0; i < this.temaRequisitos.length; i++) {
            if (this.temaRequisitos[i] === pTema) {
                return repetido;
            }
        }
        this.temaRequisitos.push(pTema);
        repetido = true;
        return repetido;
                
    }
}