'use strict'

//Funciones anonima es una funcion sin nombre donde la puedo meter en una var
//Es una funcion que no tiene nombre
//callbacks e suna funcion que se ejecuta dentor de otra
//una funcion que se ejecuta dentor de otra
var pelicula = function(nombre){
	return "la pelicula es: " + nombre;
}

console.log(pelicula("nombre"));

function sumame1(a, b){
	var sumar = a + b;

	return sumar;
}

console.log(sumame1(4,5));

//una funion de callbaks es una funcion anoninima que no tiene ningun nombrey que se le pasa por parametro una funcion y esa func dentro de ella ejecuta la fun anonima

function sumame(a, b, sumaYmuestra, sumaPorDos){
	var sumar = a + b;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,7,function (dato){console.log("la suma es: " + dato)}, function(dato){console.log("la suma por dos es: " + (dato * 2))});

//funciones flechas es una forma de  definir funciones de callbacks pero de una manera mas limpia y clara solo usando una flecha en ves de la plabra funcrion

sumame(4,4,(dato) => {console.log("la suma es: " + dato)}, (dato) => {console.log("la suma por dos es: " + (dato * 2))});
