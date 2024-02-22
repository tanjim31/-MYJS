const fullName= "Rahat Ahmed Tanjim"
const sen = "I'm from Bangladesh" ; //wrap other quatations
console.log(sen);
const sen2 = 'I\'m from Bangladesh'; //use back slash
console.log(sen2);
const sen4 = 'Hello This is "Tanjim"'; //wrap other quatations
console.log(sen4);
const sen5 = "Hello This is \"Tanjim\"";
console.log(sen5);
let info = "Rahat " + "Ahmed";
console.log(info);
let info2= fullName + " " +sen;
console.log(info2);
let info3 = `Hello This is ${fullName} 
and ${sen}. 
We know 4 + 4 = ${4+4}`; // not only variable er moddhe js er shobkichui kora jay
console.log(info3);
document.getElementById("str").innerText= info3;


let fullName2= new String("Tanjim"); // object (It takes more memory space and makes software slow)
let fullName3 = "Tanjim";
// fullName2==fullName3
// true
// fullName===fullName3 (check value and types and these are not same type)
// false
console.log(fullName2);
console.log(fullName2[1]);
fullName2[1]="o";  //This is not applicable

//String methods
console.log(info3.length); //77
console.log(info3.charAt(0)); // 0 position e kon word ache (H)
console.log(info3.indexOf('T')); //  "T" koto number index e ache
console.log(info3.toUpperCase()); 
console.log(info3.toLowerCase());

// slice and substring
const student= "Rahat Ahmed Tanjim";
console.log(student.slice(6));     //6 er ag porjnto shob kete dibe
console.log(student.substring(6)); //6 er ag porjnto shob kete dibe
// There have difference between slice and substring ,, slice accept negative value but substring can't 
console.log(student.slice(-6));    // -6 theke -1 porjnto portion ke show korbe
console.log(student.substring(-6)); // Puro string print korbe

console.log(student.slice(6,9));    // 6 theke start hoye 8 porjnto nibe 
console.log(student.substring(6,9));  // 6 theke start hoye 8 porjnto nibe 

console.log(student.slice(-14,-10));  
console.log(student.substring(-14, -10)); //fully blank answer
  
console.log(student.slice(12,1));    //there is starting index but no finding ending index it shows blank
console.log(student.substring(12, 1)); // eta swap hoye jabe 1 theke 12 porjnto nibe

//trim
const someText= "       Tanjim        ";
console.log(someText);
console.log(someText.trim()); //extra shobgulo space kete dibe
console.log(someText.trimStart());  //only shamner space katbe
console.log(someText.trimEnd());   //only sesher space katbe

//replace
const url = "http://tanjim.com//new%20rat/";
console.log(url.replace("%20", "-"));

//split
const names = "Rahat Ahmed Tanjim";
console.log(names.split());     // array length 1
console.log(names.split(" "));   // array length 3








