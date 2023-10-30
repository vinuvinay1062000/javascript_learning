// data types (primitive data types)
// string "vinay"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
// let firstName = "vinay";

console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// // convert string to number. 

 let myStr = +"34";   //(add + symbol)

 console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);





// string concatenation 

let string1 = "17";
let string2 = "10";

// let newString = string1 + string2
let newString = +string1 + +string2;
console.log(newString);
console.log(typeof newString);





// template string 
let agee = 22;
let firstName = "vinay"

// "my name is vinay and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${agee}`


let about = `my name ${firstName}`
console.log(about);
console.log(aboutMe);





// undefined 
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "vinay";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "vinay";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error 

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// let sameMyNumber = 123;(it will through error)
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);






// booleans & comparison operator 

// booleans 
// true, false 

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs === 
//console.log(num1 == num2);(true output)
// console.log(num1 === num2);(false)

// != vs !==

// console.log(num1 !== num2);