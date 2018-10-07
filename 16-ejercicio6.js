'use strict'

//que diga si un numero es par p impara
//1.ventana prompt
//2. si no es valido que nos pida de nuevo el numero

do{
	var numero = prompt("Ingrese numero: " + 0);
}while(isNaN(numero))

if (numero % 2 == 0){
	document.write("El numero es par");
}else{
	document.write("El numero es impar");
}