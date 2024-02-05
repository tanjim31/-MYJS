document.getElementById("title").innerHTML="Hello This is variable";
let fruits= 'Mango'
console.log(`${fruits} is my favourite fruit and I like to eat ${fruits} `);

//Var variable
var a = 10;
var a =12;
console.log(a); //var is redeclare
a = 'Bangladesh'; // var is reassign
console.log(a);
var country; //undefined

//Let variable 
let b =10; //let is not redeclare
b=11; // let is reassign
console.log(b);

//const variable
const c = 15; // const is not redeclare
//c=16; // const is not reassign
console.log(c);

const person = {
    firstName: 'Rahat',
    age : 30

};
person.country= 'Bangladesh';
person.age= '32';
console.log(person);