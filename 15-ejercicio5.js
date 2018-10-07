'use strict'

//Mostrar todos los numero divisiores de un numero introducido por pantalla

var numero = parseInt(prompt("Ingrese un numero: ", 1));

for (var i = 1; i <= numero; i++){
	if (numero % i == 0){
		document.write(i + "<br>");
	}
}