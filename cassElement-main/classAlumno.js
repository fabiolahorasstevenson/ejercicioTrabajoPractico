"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pRespuestas) {
        this.nombre = pNombre;
        //this.trabajoPracticos = pTrabajoPractico;
        this.respuestas = pRespuestas;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (pNombre) {
        if (pNombre === '') {
            throw new Error("No se puede agregar nombres vacíos");
        }
        else {
            this.nombre = pNombre;
        }
    };
    /*
        public getTrabajoPracticos(): TrabajoPractico[] {
            return this.trabajoPracticos;
        }
    
        public setTrabajoPracticos(trabajoPracticos: TrabajoPractico[]): void {
            this.trabajoPracticos = trabajoPracticos;
        }
    */
    Alumno.prototype.getRespuestas = function () {
        return this.respuestas;
    };
    Alumno.prototype.setRespuestas = function (respuestas) {
        this.respuestas = respuestas;
    };
    Alumno.prototype.realizarTabajoPractico = function (pTrabajoParactico, pRespuestas) {
        //Recorrer las preguntas
        var realizado = true;
        console.log("El trabajo práctico se ha hecho");
        return realizado;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
