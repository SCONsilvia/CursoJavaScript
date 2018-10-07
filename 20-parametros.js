'use strict'
//PARAMETRO FLA ES UNA VARIABLE QUE DA TRUE O FALSE
function calculadora(a,b, mostrar = false){
	if (mostrar){
		/*console.log("suma: " + (a+b));
		console.log("resta: " + (a-b));
		console.log("Multiplicacion: " + (a * b));
		console.log("Division: " + (a / b));
		console.log(mostrar);*/
		porConsola(a,b, mostrar);
	}else{
	/*	document.write("suma: " + (a+b));
		document.write("resta: " + (a-b));
		document.write("Multiplicacion: " + (a * b));
		document.write("Division: " + (a / b));
		document.write(mostrar);*/
	}
		porPantalla(a,b, mostrar);
}

calculadora(12,8);
calculadora(98,2);

for (var i = 1; i <= 10; i++){
	calculadora(i,8);
}

//parametros opcionales no son obligatorio pasar resultado

calculadora(9,9,true);

//Funcion dentro de otra

function porConsola(a,b, mostrar){
	console.log("suma: " + (a+b));
	console.log("resta: " + (a-b));
	console.log("Multiplicacion: " + (a * b));
	console.log("Division: " + (a / b));
	console.log(mostrar);
}

function porPantalla(a,b, mostrar){
	document.write("suma: " + (a+b));
	document.write("resta: " + (a-b));
	document.write("Multiplicacion: " + (a * b));
	document.write("Division: " + (a / b));
	document.write(mostrar);
}
