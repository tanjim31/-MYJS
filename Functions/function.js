// 1. Code – Driven Invocation 

function myFunction(){
    console.log("Hello This is a function");
}
myFunction();


//with parameter
function myFunction2(name, age, dateOfBirth=1997){ //this is takes parameter
    console.log('Hello ' + name + ' Your age is ' + age + ' Your date of birth is ' + dateOfBirth);
    console.log(`Hello ${name} Your age is ${age} Your date of birth is ${dateOfBirth}`); // both are same
}
myFunction2('Tanjim', 26); //this is passing argument



// 2. Event – Driven Invocation
function isSubscribed(){
    console.log('Subscribed!!!');
}
document.getElementById('btn').addEventListener('click', isSubscribed);


// 3. Automatic (Self-Invoked) Invocation
(function(message){
    console.log('I am self invoking function', message);
})('Hello');


// 4. Function Expression
let maths=function(a,b){
    return a*b;
}
console.log(maths(2,4));


// 5. Anonymous Function
let numbers= [4,5,6,7,8];
let sqrNumber= numbers.map(function(num){
    return num*num;
});
console.log(sqrNumber);


// 6. Arrow Function
/*
let maths=function(a,b){
    return a*b;
}
console.log(maths(2,4));
*/

let add = (x,y)=> // no need function name 
    x+y; // no need return keyword

console.log(add(5,4));


// 7. Nested Function
function nested(firstName){
    function inner(){
        console.log('Hello',firstName);
    }
    return inner();
}
nested('Tanjim');
