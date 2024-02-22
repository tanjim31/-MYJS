const x= 0.6;
const y= 0.7;
console.log(x+y); //1.2999999999999998
console.log((x*10 + y*10)/10); // 1.3 (expected result) 
const l = (x+y).toFixed(1); // Doshomik er por ek ghor nibo
console.log(l); // but for using toFixed now it is a string not a number
console.log(new Number(l));  // now it is a number types object

const a =10, b=20, c=30;
const d = 'javaScript';
console.log(a+b+c + l); // 601.3
console.log(l+a+b+c);  // 1.3102030
console.log(b+a+l+c);  // 301.330
console.log(c-l);  //28.7  minus, mult, div er jonno string ke number e convert kore nise
console.log(c-d);  //NaN coz d is a text 
console.log(typeof(c-d)); //number
console.log(c.toString(2)); // 30er binary value 
const r = 9.14867435768;
console.log(r.toFixed(2));   //doshomik er por 2 ghor nibe

 
