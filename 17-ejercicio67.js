'use strict'

//tabla de multiplicar de un numero introducuidor por pantalla

var numero = parsetInt(prompt("Ingrese un numero: ", 0));
var resultado;

for (var i = 1; i <= 10; i++){
	document.writer(i + " * " + numero + " = " + numero*i + "<br>");
}