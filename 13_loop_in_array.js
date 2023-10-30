// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);



///////////////////////////////////////////////////////////////

// use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits = ["banana"]  invalid 
// fruits.push("banana"); valid
// console.log(fruits);


//////////////////////////////////////////////////////////////


// while loop in array 
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);


//////////////////////////////////////////////////////////

// for of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}



///////////////////////////////////////////////////////////////////


// for in loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);