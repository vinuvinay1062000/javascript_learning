const person = {
    firstName: "vinay",
    lastName: "kumar",
    age: 24,
    colour: "white"
 }

 const {firstName, lastName, ...rem} = person;  //you can change name also

 const {firstName: var1, lastName: var2, ...rem1} = person;
 console.log(firstName) ;
 console.log(rem);

 console.log(var1);

 //////////////////////////////////////////////////

 const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName);
  console.log(restProps);

  
  //////////////////////////////////////////////////////////////////////////

  // nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);