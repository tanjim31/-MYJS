// let num = 30.2654687564;
// console.log(num);
// // if need round value
// console.log(Math.round(num));
// // if need greater value
// console.log(Math.ceil(num));
// // if need samller value
// console.log(Math.floor(num));
// // if need square value
// console.log(Math.pow(3,2));
// // if need root value
// console.log("Root value is: " + Math.sqrt(64));
// // if need positive value
// console.log(Math.abs(-5));
// // if need minimum value
// console.log(Math.min(1,5,7,0,-5,-9));
// // if need maximum value
// console.log(Math.max(1,5,7,0,-5,-9));
// // if need PI value
// console.log(Math.PI);
// // if need Sin value
// console.log(Math.sin((60*Math.PI)/180));
// // if need random value
// console.log(Math.random());
// console.log(Math.random().toFixed(2)); //doshomik er por 2 ghor show korbe
// console.log(Math.random().toFixed(2) * 10); //doshomik er por 2 ghor show korbe and number 10 er moddhe generate hobe 
// console.log(Math.floor(Math.random().toFixed(2) * 10 + 1)); // 10 porjnto random number select hobe purnoshonkha

// lodo app


function lodo(){
    let upperValue= 6;
    let result= Math.ceil(Math.random() * upperValue) ;
    let imageSource= 'img/' + result + '.png'
    document.getElementById("ludo").src=imageSource;

}