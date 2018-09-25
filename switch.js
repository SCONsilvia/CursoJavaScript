'use strict'

console.log("switch");

var edad = 5;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
		case 40:
		imprime = "crisi de los cuarentas";
	break;
	default:
		imprime = "npi";
	break;
}

console.log(imprime);