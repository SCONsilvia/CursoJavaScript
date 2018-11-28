'use strict'
window.addEventListener('load', () => {//cuando la pagina esta carga es que se ejecuta el codigo
			//eventos del raton

			var boton = document.querySelector('#boton');

			function cambiarcolor(){
				var bg = boton.style.background;
				if( bg== "green"){
					boton.style.background = "red";

				}else{
					boton.style.background = "green";
				}
						boton.style.padding = "10px";
					boton.style.border = "1px solid #ccc";
			}
			var boton2 = document.querySelector('#boton2');

			function cambiarcolorcondosclick(){
				var bg = boton2.style.background;
				if( bg== "green"){
					boton2.style.background = "red";

				}else{
					boton2.style.background = "green";
				}
						boton2.style.padding = "10px";
					boton2.style.border = "1px solid #ccc";
			}

			function cambiarordenado(){
				var bg = boton3.style.background;
				if( bg== "green"){
					boton3.style.background = "red";

				}else{
					boton3.style.background = "green";
				}
						boton3.style.padding = "10px";
					boton3.style.border = "1px solid #ccc";
			}

			//click
			boton3.addEventListener('click', function(){
				cambiarordenado();
			})

			//mouse over cuando pasa por encima

			boton4.addEventListener('mouseover', function(){
				boton4.style.background = "blue";
			})

			//igual que el anterior pero cuando dejas de montar el mouse
			//mouseout
			boton5.addEventListener('mouseout', function(){
				boton5.style.background = "black";
			})





			//Focus
			var input = document.querySelector("#campo_nombre");
			input.addEventListener('focus', function(){
				console.log("[focus] esta dentro del input");
			})



			//Blur
			input.addEventListener('blur', function(){
				console.log("[blur] esta fuera del input");
			})

			//ketdown
			input.addEventListener('keydown', function(event){
				console.log("[keydonw] pulsando esta teclat", String.fromCharCode(event.keyCode));
			})

			//keypress
			input.addEventListener('keypress', function(event){
				console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
			})


			//keyup
			input.addEventListener('keyup', function(event){
				console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
			})

})
