'use strict'

//tabla de multiplicar de un numero introducuidor por pantalla

var numero = parseInt(prompt("Ingrese un numero: ", 0));
var resultado;

for (var i = 1; i <= 10; i++){
	document.write(i + " * " + numero + " = " + numero*i + "<br>");
}

//Todas las tablas de multiplicar

for(var i = 1; i <= 10; i++){
	for (var j = 1; j<=10; j++){
		document.write(j + " * " + i + " = " + i*j + "<br>");
	}
	document.write("<br><br>");
}