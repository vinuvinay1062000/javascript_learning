
 // String indexing 

 let myName = "vinay";

 //  v   i   n   a   y  
 //  0   1   2   3   4   
 
 // console.log(myName[0]);
 // length of string 
 // myName.length 
 
 console.log(myName.length);
 
 console.log(myName.length -1);
 
 
 console.log(myName[myName.length-2]);
 
 // last Index : length - 1 






 // trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "vinay";

// console.log(firstName.length);
// firstName = firstName.trim(); // "vinay"
// console.log(firstName)
// console.log(firstName.length);


    // firstName.toLocaleUpperCase()(if you call in console it wont work)
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(0, 2); // vi
console.log(newString);