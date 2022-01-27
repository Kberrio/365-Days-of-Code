class Person {
    constructor(name){
        this.name = name
    }

printNameArrow() {
    setTimeout(() => {
        console.log('Arrow: ' + this.name);
    }, 100);
}

printNameFunction(){
    setTimeout(() => {
        console.log('Function: ' + this.name);
    }, 100);
}
}

let person = new Person('Kevin')
person.printNameArrow() //prints Kevin
person.printNameFunction() // doesn't print Kevin
console.log(this.name);