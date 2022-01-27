function myDisplayer(some) {
	document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
	let sum = num1 + num2;
	myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


// When to Use a Callback?
// The examples above are not very exciting.

// They are simplified to teach you the callback syntax.

// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// Asynchronous functions are covered in the next chapter.