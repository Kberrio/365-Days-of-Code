var myVar = 10;

https: function multiplicacion() {
	let result = myVar * 10;
	console.log(result);
}

//out of scope so it will fail
console.log("El resultado de result es: " + result);