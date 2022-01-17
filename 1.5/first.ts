// The any data type is the superset of all the data types in TypeScript.
//Giving any variable the type of any is equivalent to opting out of type checking for a variable.
let myVariable :any = 'This is a string'

//These are the types which are built in TypeScript. 
//They include number, string, boolean, void, null and undefined.
let num: number = 5;
let firstName: string = 'Kevin';
let isPresent: boolean = true;

//TypeScript has built-in support for classes, which were unsupported by ES5 and earlier versions. 
//This means we can use the class keyword to easily declare one.

class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;

    constructor(model: String, doors: Number, isElectric: Boolean){
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    displayMake(): void{
        console.log(`This car is ${this.model}.`);
    }
}

//In the above example, we have declared a Car class, along with some of its properties, which we’re initializing in the constructor. 
//We also have a method which would display some message using its property.

//Let’s see how we can create a new instance of this class:
const Prius = new Car('Prius', 4, true);
Prius.displayMake(); //This car is a Prius.

//To create an object of a class, we use the keyword of new and call the constructor of the class and pass it the properties. 
//Now this object Prius has its own properties of model, doors, and isElectric. 
//The object also can call the method of displayMake, which would have access to the properties of Prius.

//Reference:
//https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/