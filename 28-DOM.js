'use strict'

//conseguir elementos con un id concreto
function cambiaColor(color){
	caja1.style.background = color;
}
var caja = document.getElementById("micaja").innerHTML;
//var caja1 = document.getElementById("micaja");

var caja1 = document.querySelector("#micaja");
caja1.innerHTML = "Texot desde js";
caja1.style.background = "red";
caja1.style.padding = "20px";
caja1.style.color = "white";
caja1.className = "hola hola2";
console.log(caja);





//conseguir elemeto por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

console.log(todosLosDivs[2].textContent);
document.write("lista");
var valor;
//todosLosDivs.forEach((valor,indice) => {
for (valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	//parrafo.appendChild(texto);
	parrafo.prepend(texto);
	document.querySelector('#miseccion').appendChild(parrafo);}
}

//document.querySelector('#miseccion').append(hr); no sirve

//});
//tambien se buede con el inner.HTML solo que es me permite asignarle un nuevo valor


//conseguir elementos por su clase css


var divsrojos = document.getElementsByClassName('rojo');

var divsamarillo = document.getElementsByClassName('amarillo');
divsamarillo[0].style.background ='yellow'
var div;
for (div in divsrojos){
	if(divsrojos[div].className == 'rojo')
		divsrojos[div].style.background = 'red';
}
console.log(divsrojos);

//query selector

var id = document.querySelector("#encabezado");

console.log(id);