let myPromise = new Promise((resolve, reject) => {
    let a = 11
    if (a == 1) {
        resolve('a is equal to ' + a)
    } else {
        reject('a is not equal to ' + a)
    }
})

myPromise.then((result) => {
    console.log("The promise was resolved");
}).catch((result) => {
    console.log("The promise was rejected.");
})


let nameButton = document.getElementById("nameButton")
let lastNameButton = document.getElementById("lastNameButton");


function getName() {
    let firstName = window.prompt("What is your name?", "John")
}

function getLastName() {
	let lastName = window.prompt("What is your last name?", "Doe");
}

function replaceName() {
    return new Promise ((resolve, reject) => {
        if (firstName != null) {
            resolve(nameButton.innerText = firstName) 
        } else {
            reject(alert("You need to type in your name!"))
        }
    })
}