'use strict'

//calculadora
//pida dos numeros
//si metemos mal un numero que lo vuelva a pedir
//mostrar en el body en una alerta y por la consola el resultado de sumar restar multiplicar y dividir esas dos cifras


var numero1, numero2;

do{
	numero1 = prompt("Ingrese un numero: ", 0);
}while(isNaN(numero1))

do{
	numero2 = prompt("ingrese otro numero: ", 0);
}while(isNaN(numero2))

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

alert("La suma de los dos numeros son: " + (numero1+numero2));
alert("La resta de los dos numeros son: " + (numero1-numero2));
alert("La multiplicacion de los dos numeros son: " + (numero1*numero2));
alert("La divicion de los dos numeros son: " + (numero1/numero2));
