'use strict'

//plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tus apellisdos");

var texto = "Mi nombre es: " + nombre + "<br>Mis apellidos son: " + apellido;

var texto = `
	<h1>Hola que tal</h1>
	<h3>mi nombre es: ${nombre}</h3>
	<h3>mis apellidos son: ${apellido}</h3>
`;
document.write(texto);