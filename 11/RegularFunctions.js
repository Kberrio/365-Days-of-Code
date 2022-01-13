// Named function with multiple parameters
function sum (a, b) {
    return a + b
}

// Named function with one parameter
function isPositive(number) {
    return number >= 0
}

// Named function with no parameters
function randomNumber() {
    return Math.random
}

// Anonymous function with no parameters
document.addEventListener('click', function () {
    console.log('Click');
})