//mostrar todos los numero que hay entre dos numeros
//debugger;
var numero1 = parseInt(prompt("Ingrese un numero: ", 0));
var numero2 = parseInt(prompt("Ingrese un segundo numero: ", 0));

console.log('puto');
if (numero1 >= 0 && numero2 >= 0 ){
	if(numero1 > numero2){
		for (var i = numero2; i <= numero1; i++){
			document.write(i + "<br/>");
		}
	}else if (numero2 > numero1){
		for ( var i = numero1; i <= numero2; i++){
			document.write(i + "<br/>");
		}
	}else{
		document.write(numero1);
	}
}
