// if else condition 

let age = 17;

if(age>18){
    console.log("User can play ddlc");
}else {
    console.log("User can play mario");
}

let num = 13;

if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

let firstName;

// let firstName = -1  (truthy)
// let firstName = null(falsy)

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}