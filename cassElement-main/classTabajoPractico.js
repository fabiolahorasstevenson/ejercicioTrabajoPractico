"use strict";
exports.__esModule = true;
exports.TrabajoPractico = void 0;
var TrabajoPractico = /** @class */ (function () {
    function TrabajoPractico(paramTema, paramPuntaje, pEjercicios) {
        this.tema = paramTema;
        this.puntajeDeAprobacion = paramPuntaje;
        this.ejercicios = pEjercicios;
    }
    TrabajoPractico.prototype.addEjercicio = function (ejercicios, ejercicio) {
        var repetido = false;
        for (var i = 0; i < this.ejercicios.length; i++) {
            if (this.ejercicios[i] === ejercicio) {
                return repetido;
            }
        }
        this.ejercicios.push(ejercicio);
        repetido = true;
        return repetido;
    };
    TrabajoPractico.prototype.corregirTrabajoPractico = function (respuestas) {
        var nota = 0;
        for (var i = 0; i < respuestas.length; i++) {
            if (this.ejercicios[i].corregirEjercicio(respuestas[i]) === 1) {
                nota++;
            }
        }
        return nota;
    };
    TrabajoPractico.prototype.estaAprobado = function (respuesta) {
        var nota = this.corregirTrabajoPractico(respuesta);
        if (nota < this.puntajeDeAprobacion) {
            return false;
        }
        else {
            return true;
        }
    };
    TrabajoPractico.prototype.getTema = function () {
        return this.tema;
    };
    TrabajoPractico.prototype.esDeTema = function () {
        return ("es el tema" + this.getTema());
    };
    TrabajoPractico.prototype.getEjercicios = function () {
        return this.ejercicios;
    };
    return TrabajoPractico;
}());
exports.TrabajoPractico = TrabajoPractico;
