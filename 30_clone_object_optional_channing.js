// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);



/////////////////////////////////////////////////////////////////////

// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}


console.log(user.firstName);// (output is harshith)
console.log(user.address);//(undefined )
console.log(user.address.houseNumber);//(error)


console.log(user?.firstName);
console.log(user?.address?.houseNumber);