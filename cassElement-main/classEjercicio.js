"use strict";
exports.__esModule = true;
exports.Ejercicio = void 0;
var Ejercicio = /** @class */ (function () {
    function Ejercicio(paramConsigna, paramRespuestaCorrecta, paramPuntajeMaximo) {
        this.consigna = paramConsigna;
        this.respuestaCorrecta = paramRespuestaCorrecta;
        this.puntajeMaximo = paramPuntajeMaximo;
    }
    Ejercicio.prototype.resueltoCorrectamente = function (respuesta) {
        if (this.respuestaCorrecta.toUpperCase() === respuesta.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    };
    Ejercicio.prototype.corregirEjercicio = function (respuesta) {
        if (this.respuestaCorrecta.toUpperCase() === respuesta.toUpperCase()) {
            return 1;
        }
        else {
            return 0;
        }
    };
    Ejercicio.prototype.getPuntajeMaximo = function () {
        return this.puntajeMaximo;
    };
    return Ejercicio;
}());
exports.Ejercicio = Ejercicio;
