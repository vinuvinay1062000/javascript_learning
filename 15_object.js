// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);

// // how to access data from objects 
// // console.log(person.name);
// // console.log(person["name"]); if you not use semicolon it will throgh error because defalut object values are string nature.
// // console.log(person["age"]);
// // console.log(person.hobbies);

// // how to add key value pair to objects
// person["person"] = "male";
// console.log(person);



////////////////////////////////////////////////////////////////////

// difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);
// person[key] = "harshitvashisth@gmail.com";
// console.log(person);


////////////////////////////////////////////////////////////////


const key1 = "objkey1";
const key2 = "objkey2";


const val1 = "objval1";
const val2 = "objval2";

 
const obj = {
    [key1] : val1,
    [ key2]: val2
}
console.log(obj);
console.log("helllo");



///////////////////////////////////////////////////////////

// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }




////////////////////////////////////////////////////////////////////////


// computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// // const obj = {
// //     objkey1 : "myvalue1",
// //     objkey2 : "myvalue2",
// // }

// // const obj = {
// //     [key1] : value1,
// //     [key2] : value2
// // }

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);



///////////////////////////////////////////////////////////


// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
  
  // const newObject = { ...obj2, ...obj1, key69: "value69" };
  // const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  // console.log(newObject);



  //////////////////////////////////////////////////////