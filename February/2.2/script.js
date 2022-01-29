//Declaring JS Variables
let myName; //block scope
{
  let x = 2;
}
// x can NOT be used here.



var yourName; //function scope

{
  var x = 2;
}
// x CAN be used here.