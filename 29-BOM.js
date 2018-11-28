'use strict'

//BOM Browser object model
function getBom(){
	console.log(window.innerHeight);
	console.log(window.innerWidth);
	console.log(screen.width);//lo busca en las propiedades como tal predefinidas
	console.log(screen.height);
	console.log(window.location);
	console.log(window.location.href);

}

function rediret(url){
	window.location.href = url;
}

function abrirVentana(url){
	window.open(url,"","width=400, height=300");
}

getBom();