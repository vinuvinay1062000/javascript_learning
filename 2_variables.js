"use strict";
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

var firstName = "vinay";

// use a variable 
console.log(firstName);

// change value 

// firstname = "kumar";

firstName = "kumar";

console.log(firstName);



// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1 + 2);
console.log(value1 * 2);
console.log(value1 - 2);

console.log(value1 ** 2); //(power)

console.log(value1 **0.5);  //(root)


// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 

// first name (invalid)

// convention 

// start with small letter and use camelCase 





// let keyword 
// declare variable with let keyword 

let lastName = "harshit";
// let lastName = "Mohit"; (we cant use like this but in var we can declare)
// var lastName = "harshit";
// var lastName = "mohit";

lastName = "Mohit";
console.log(lastName);



// declare constants 

const pi = 3.14;
// pi = 3.15  ( you cannot change the pi value )
 console.log(pi *2 +2 -2);  // (here you can change or add)



