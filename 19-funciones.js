'use strict'

//Una funcion es una agrupacion reutilizable de un conjuto de instrucciones

function calculadora(){
	return "Hola Soy la calculadora";
}

function calculadora2(){
	console.log("/nHola Soy la calculadora");
	console.log("Si soy yo");

	return "hola";
}
console.log(calculadora(), calculadora(), calculadora(), calculadora2());
calculadora2()