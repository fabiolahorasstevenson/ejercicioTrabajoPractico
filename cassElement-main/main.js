"use strict";
exports.__esModule = true;
var classAlumno_1 = require("./classAlumno");
var classTabajoPractico_1 = require("./classTabajoPractico");
var classEjercicio_1 = require("./classEjercicio");
var classTrabajoPracticoIntegrador_1 = require("./classTrabajoPracticoIntegrador");
var Ejercicios1 = [];
var trabajoPractico1 = new classTabajoPractico_1.TrabajoPractico('Tema 1', 34, Ejercicios1);
var respuestas1 = ["Si", "No", "Depende"];
var alumno1 = new classAlumno_1.Alumno("Pirulo", respuestas1);
var ejercicios1 = new classEjercicio_1.Ejercicio("TypeScript es un superconjunto de JavaScript?", "SI", 2);
var ejercicios2 = new classEjercicio_1.Ejercicio("Existe el valor tipo string en typescript ?", 'SI', 2);
var ejercicios3 = new classEjercicio_1.Ejercicio("TypeScript extiende la sintaxis de JavaScript?", "SI", 2);
var ejercicios4 = new classEjercicio_1.Ejercicio("TypeScript es multiparadigma?", "SI", 2);
var ejercicios5 = new classEjercicio_1.Ejercicio("En TypeScript existen los módulos de Node.js?", "SI", 2);
var TrabajoPractico1 = new classTabajoPractico_1.TrabajoPractico("TypeScript", 10, Ejercicios1);
var TrabajoPracticoIntegrador1 = new classTrabajoPracticoIntegrador_1.TrabajoPracticoIntegrador("TypeScript", 10, 1);
try {
    alumno1.setNombre('');
}
catch (error) {
    console.log("Error ocurrido, el nombre no puede estar vacío");
}
//let agregado:boolean = trabajoPractico1.addEjercicio(Ejercicios1,ejercicios1);
//console.log("El ejercicio ha sido agregado"+agregado);
console.log("El trabajo práctico 1 es de Tema" + TrabajoPractico1.esDeTema());
