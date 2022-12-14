"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TrabajoPracticoIntegrador = void 0;
var classTabajoPractico_1 = require("./classTabajoPractico");
var TrabajoPracticoIntegrador = /** @class */ (function (_super) {
    __extends(TrabajoPracticoIntegrador, _super);
    function TrabajoPracticoIntegrador(pTema, paramPuntaje, pPuntajeMinimoPorEje) {
        var _this = _super.call(this, pTema, paramPuntaje) || this;
        _this.puntajeMinimoPorEje = pPuntajeMinimoPorEje;
        return _this;
    }
    TrabajoPracticoIntegrador.prototype.addEjercicio = function (ejercicio) {
        var repetido = false;
        for (var i = 0; i < this.ejercicios.length; i++) {
            if (this.ejercicios[i] === ejercicio) {
                return repetido;
            }
        }
        this.ejercicios.push(ejercicio);
        repetido = true;
        console.log("Lo solucionamos con consol.log");
        return repetido;
    };
    return TrabajoPracticoIntegrador;
}(classTabajoPractico_1.TrabajoPractico));
exports.TrabajoPracticoIntegrador = TrabajoPracticoIntegrador;
