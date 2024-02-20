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
