// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}



////////////////////////////////////

const persons =[
 {firstName: "vinay",age: 24, gender: "male"},
 {firstName: "kumar",age: 34, gender: "male"},
 {firstName: "ajay",age: 64, gender: "male"}

]

console.log(persons);

for (let person of persons){
    console.log(person);
    console.log(person.firstName);



}


//////////////////////////////////////////////////////////////