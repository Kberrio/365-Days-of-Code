var myVar = 10;

function multiplicacion() {
	let result = myVar * 10;
	console.log(result);
}

//result is an out of scope variable so the following log will fail
console.log("El resultado de result es: " + result);