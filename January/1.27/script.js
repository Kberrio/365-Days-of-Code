async function myFunction() {
	//The keyword async before a function makes the function return a promise:
	return "Hello";
}
myFunction().then(function (value) {
	myDisplayer(value);
});
