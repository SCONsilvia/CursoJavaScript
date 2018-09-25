'use strict'

//mostrar media y suma de losresultados hasta que el user ingrese numero negativo

var numero = 0, suma = 0;
numero = parseInt(prompt("Ingrese numero: ", 0))

for(var i = 0; numero >= 0; i++){
	suma = suma + numero;
	numero = parseInt(prompt("Ingrese numero: ", 0))

	if (isNaN(numero)){
		numero = 0;
	}

}
var media = suma/i;

alert("Suma: " + suma + "Media: " + media);