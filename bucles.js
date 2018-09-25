'use strict'

var numero = 100;

for (var i = 0; i <= numero; i++){
	console.log(i);

	//debugger;
}

var year = 2018
while(year <= 2051){//mientas a;o sea menos o igual a 2051 ejecuta esto
	console.log(year);
	year++;

}


console.log("do while");

//primero ejecutamos bloque y luego vmeo sla condicion

do{
	console.log(year);
	year--;
	if (year == 2018){
		break;
	}
}while(year != 1999)