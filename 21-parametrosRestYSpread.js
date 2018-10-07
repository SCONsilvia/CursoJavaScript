'use strict'

// Parametros de REST (resto) y SPREAD

//parametros rest poniendo los tres puntos delantes y poniendole un nombre guarda el resto de parametros en un array
function listadoFruta(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta1: " + fruta1 + " Fruta2: " + fruta2);
	console.log(resto_de_frutas);
}
//se hace mayormente cuando no se cuanto me van a llegar
listadoFruta("naranja", "manzana", "sandia", "pera", "melon", "coco");


// SPREAD
var frutas = ["naranja", "manzana"];
listadoFruta(frutas, "sandia", "pera", "melon", "coco");//si lo paso asi me toma frutas como la fruta1 pero si quiero que me tolo los elementos del array le tengo que poner los ... puntos
listadoFruta(...frutas, "sandia", "pera", "melon", "coco");
