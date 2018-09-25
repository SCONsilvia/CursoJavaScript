'use strict'

/*programa que pida dos numeros y que nos diga cual es el mayor el menor y si son iguales
si no es un num o son menosre 0 que nos vuelva a pedir los datos*/
do{
	var numero1 = parseInt(prompt("Ingrese un numero:", 0));
}while(isNaN(numero1) || (numero1 <= 0))

//debugger;


var numero2 = parseInt(prompt("Ingrese otro numero:", 0));

while (numero2 <= 0 || isNaN(numero2)){
	numero2 = parseInt(prompt("Ingrese otro numero:", 0));
}

console.log(numero1, numero2);
if(numero1 > numero2){
	alert("El numero " + numero1 + " es mayor a " + numero2);
}else if (numero1 < numero2){
	alert("El numero " + numero2 + " es mayor a " + numero1);
}else if(numero1 == numero2){
	alert("Los numeros son iguales");
}else{
	alert("introdce num validos");
}