'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "  Bienvenido al curso curso ";
var texto2 = "Es buen curso";

//numero a string

console.log(numero);
var dato = numero.toString();
console.log(dato);

//convertir a mayusculamayuscula
var dato1 = texto1.toUpperCase();
console.log(dato1);
//convertir a minuscula
dato1 = texto1.toLowerCase();
console.log(dato1);

//calcular longiitud de texto o de arr 
var nombre = "Silvia Colmenares",
nombre1 = ["hola", "hola"];

console.log(nombre.length);
console.log(nombre1.length);

//concatenar unir texto

var textoTotal = texto1 + "\n" + texto2;
var textoTotal1 = texto1.concat(" "+texto2);

console.log(textoTotal);
console.log(textoTotal1);

//Metodos de busquedas busca primera concidencia de una plabra

var busquedas = texto1.indexOf("curso");
//hace lo mismo
console.log(texto1.search("curso"));
console.log(texto1.search("no existe"));


//busca la ultima palabra
console.log(texto1.lastIndexOf("curso"));

console.log(busquedas);

//devuelve una coleccion de los resultados que encuentre en un arr
console.log(texto1.match("curso"));
//para mas coincidencia se hace
console.log(texto1.match(/curso/g));
console.log(texto1.match(/curso/gi));

//con eso saca la palbra que haya del caracter 14 que me saque desde hay 5 letras

console.log(texto1.substr(17 ,5));

//sirve parasacar una letra en concreto

console.log(texto1.charAt(14));

//busca el texto y dice que si tue o false pero solo busca desde el principio
console.log(texto1.startsWith("Victor"));
console.log(texto1.startsWith("curso"));
console.log(texto1.startsWith("Bie"));


console.log(texto1.endsWith("curso"));


//busca una palabra
console.log(texto1.includes("curso"));

//cambiar texto por cualquier otra cosa

console.log(texto1.replace("curso", "symfony"));

//separa sting lo corta
console.log(texto1.slice(14));
console.log(texto1.slice(14, 18));

//recorta plabra y la mete en un arr
console.log(texto1.split());
//separo por espaciio
console.log(texto1.split(" "));

//quita lo espacio por delante y detraas que tenga
console.log(texto1.trim());















