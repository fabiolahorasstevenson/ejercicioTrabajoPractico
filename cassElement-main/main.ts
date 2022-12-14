import { Alumno } from './classAlumno';
import { TrabajoPractico } from './classTabajoPractico';
import { Seminario } from './classSeminario';
import { Ejercicio } from './classEjercicio';
import { TrabajoPracticoIntegrador } from './classTrabajoPracticoIntegrador';

let Ejercicios1= []; 
let trabajoPractico1: TrabajoPractico = new TrabajoPractico('Tema 1',34,Ejercicios1);
let respuestas1 = ["Si","No","Depende"];
let alumno1 = new Alumno("Pirulo",respuestas1);
let ejercicios1 = new Ejercicio("TypeScript es un superconjunto de JavaScript?","SI",2);
let ejercicios2 = new Ejercicio("Existe el valor tipo string en typescript ?",'SI',2);
let ejercicios3 = new Ejercicio("TypeScript extiende la sintaxis de JavaScript?","SI",2);
let ejercicios4 = new Ejercicio("TypeScript es multiparadigma?","SI",2);
let ejercicios5 = new Ejercicio("En TypeScript existen los módulos de Node.js?","SI",2);

let TrabajoPractico1 = new TrabajoPractico("TypeScript",10,Ejercicios1);
let TrabajoPracticoIntegrador1 = new TrabajoPracticoIntegrador("TypeScript",10,1);

try {
   alumno1.setNombre(''); 
} catch (error) {
    console.log("Error ocurrido, el nombre no puede estar vacío");
}
//let agregado:boolean = trabajoPractico1.addEjercicio(Ejercicios1,ejercicios1);

//console.log("El ejercicio ha sido agregado"+agregado);
console.log("El trabajo práctico 1 es de Tema"+TrabajoPractico1.esDeTema());

