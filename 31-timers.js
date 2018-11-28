'use strict'

window.addEventListener('load', function(){

	function intervalo(){
		//Time
		var tiempo = setInterval(function(){//se ejecuta x tiempo
			console.log("set interval ejecutado");
			var encabezado =document.querySelector("h1")
			if (encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "20px";
			}else{
				encabezado.style.fontSize = "50px";

			}

		},3000); //3 seg
		return tiempo;
}



	//se ejecuta una sola vez el timeout
	/*var tiempo = setTimeout(function(){//se ejecuta x tiempo
		console.log("set interval ejecutado");
		var encabezado1 =document.getElementById("encabezado1")
		if (encabezado1.style.fontSize == "50px"){
			encabezado1.style.fontSize = "20px";
		}else{
			encabezado1.style.fontSize = "50px";

		}

	},3000); //3 seg*/

	var tiempo = intervalo();
	var stop = document.querySelector('#stop');
	stop.addEventListener("click", function(){
		alert("has parado el intervalo en bucle");
		clearInterval(tiempo);
	})

	var stat = document.querySelector('#stat');
	stat.addEventListener("click", function(){
		alert("has iniciado el intervalo en bucle");
		intervalo();
	})

});


