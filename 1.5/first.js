// The any data type is the superset of all the data types in TypeScript.
//Giving any variable the type of any is equivalent to opting out of type checking for a variable.
var myVariable = 'This is a string';
//These are the types which are built in TypeScript. 
//They include number, string, boolean, void, null and undefined.
var num = 5;
var firstName = 'Kevin';
var isPresent = true;
//TypeScript has built-in support for classes, which were unsupported by ES5 and earlier versions. 
//This means we can use the class keyword to easily declare one.
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is ".concat(this.model, "."));
    };
    return Car;
}());
//In the above example, we have declared a Car class, along with some of its properties, which we’re initializing in the constructor. 
//We also have a method which would display some message using its property.
//Let’s see how we can create a new instance of this class:
var Prius = new Car('Prius', 4, true);
Prius.displayMake(); //This car is a Prius.
//To create an object of a class, we use the keyword of new and call the constructor of the class and pass it the properties. 
//Now this object Prius has its own properties of model, doors, and isElectric. 
//The object also can call the method of displayMake, which would have access to the properties of Prius.
