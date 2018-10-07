'use strict'


//mostrar todos los numeos impares que ay ente dos numeros introducidos por el usuario


var numero1 = parseInt(prompt("Ingrese un numero: ", 0));
var numero2 = parseInt(prompt("Ingrese otro numero: ", 0));


if(numero1 >= 0 && numero2 >= 0){
	if (numero1 < numero2){
		for (var i = numero1; i <= numero2; i++){
			if(i%2 != 0){
				document.write(i + "<br>");
			}
		}
	}else if(numero2 < numero1){
		for (var i = numero2; i <= numero1; i++){
			if(i%2 != 0){
				document.write(i + "<br>");
			}
		}
	}else if(numero2 == numero1){
		if(i%2 != 0){
			document.write(i + "<br>");
		}
	}
}

