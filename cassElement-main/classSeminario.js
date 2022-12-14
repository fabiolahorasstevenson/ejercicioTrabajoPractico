"use strict";
exports.__esModule = true;
exports.Seminario = void 0;
var Seminario = /** @class */ (function () {
    function Seminario(paramTema, paramTemaRequisitos) {
        this.tema = paramTema;
        this.temaRequisitos = paramTemaRequisitos;
    }
    Seminario.prototype.seminario = function (pTema) {
        this.tema = pTema;
    };
    Seminario.prototype.addRequisito = function (temaRequisitos, pTema) {
        var repetido = false;
        for (var i = 0; i < this.temaRequisitos.length; i++) {
            if (this.temaRequisitos[i] === pTema) {
                return repetido;
            }
        }
        this.temaRequisitos.push(pTema);
        repetido = true;
        return repetido;
    };
    return Seminario;
}());
exports.Seminario = Seminario;
