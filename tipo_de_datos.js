"use strict"

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("El resultado es" + operacion);


//Tipo de datos

var numero_entero = 44;
var cadena_texto = "Hola";
var verdadero_o_falso = true;


var numerofalso = "33";
console.log(numerofalso);
//
Number(numerofalso);
console.log(Number(numerofalso));
console.log(parseInt(numerofalso)); //cnvierte int
console.log(parseFloat(numerofalso));


console.log(numero_entero+"concatenado");
console.log(numero_entero+4);
console.log(String(numero_entero)+4);


//Saber tipo de dato 
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);