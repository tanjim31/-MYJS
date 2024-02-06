//declaration

//const language2= new Array('HTML', 'CSS', 'JavaScript', true, 50); //This is another way
const language= ['HTML', 'CSS', 'JavaScript', true, 50]; // This is best way
console.log(language);
language[3] = "Tailwind CSS";  //change index value
console.log(language);
console.log(language[2]);
console.log(language.length); 
console.log(language[language.length-1]); //Last item of an array
language[5]= "Angular";
console.log(language[language.length-1]); //Last item of an array
console.log(language.join(' * '));   // protteke star diye separate thakbe 
//Delete or remove last item
language.pop(); 
console.log(language);  // Angular is remove
// Add last item
language.push('React');  
//Add first item
language.unshift('TOC');
//Delete first item
language.shift(); //TOC is deleted
// add anywhere in an array
language.splice(2,0, 'info' , 'info2'); //3nd index e add hobe and kichu delete hobena
console.log(language);
//delete anywhere in an array
language.splice(1,2)    //2nd index theke delete hobe and 2ta delete korbe
console.log(language);




//Concat arrays
const x = [1,2,3,4];
const y = [1,2,3,4,5];
const p = [5,6,7];
const z = x.concat(y);
console.log(z);
const z2 = x.concat(y,p);
console.log(z2);


// array flat 
const a =[[1,2,3], [4,5,6], [2,4,6]]; // array er moddhe array
console.log(a);
console.log(a.flat()); //3ta array ektar moddhe
