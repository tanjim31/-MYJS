//1. Write a function that takes an integer minutes and converts it to seconds.
function convert(minute){
    let res= minute*60;
    return res;
}
console.log(convert(5));

//2. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function inc(num){
    return num+1;
}
console.log(inc(-3));

// 3. Create a function that takes the age in years and returns the age in days.
function days(years){
    return years*365;
}
console.log(days(20));

// 4. Create a function that takes an array containing only numbers and return the first element.
function firstElement(num){
    return num[0];
}
let numbers= [4,9,6];
console.log(firstElement(numbers));

// 5. There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
//Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, 
//possibly zero. Return that value.
function remainder(a, b){
    let res= a%b;
    return res;
}
console.log(remainder(5,5));

// 6. Write a function that returns the string "something" joined with a space " " and the given argument a.
function something(text){
    return `something ${text}`
}
console.log(something("something"));

//7. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to 
//the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function counting(count){
    let sum =0;
    for(let i =0; i<=count; i++){
        sum +=i;
    }
    return sum;
}
console.log(counting(13));

// 8. Create a function that takes an array of numbers and return both the minimum and maximum numbers, 
//in that order.
