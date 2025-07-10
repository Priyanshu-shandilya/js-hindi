const score = 100;
// console.log(score); // 100

const balance = new Number(100);
// console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2));        // "100.0"

const otherNumber= 123.85                 //must be entered a fixed preffered decimal value
// console.log(otherNumber.toPrecision(3));

const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'));

//************************************MATHS**************************************

// console.log(Math.abs(-4));  //abs converts -ve to +ve and +ve to +ve
// // console.log(Math.ceil(3.4));   //converts to upper decimal case 
// console.log(Math.round(3.7));  //return the round off value
// console.log(Math.floor(3.9));  //returns the current number decimal place

console.log(Math.min(3,5,4,6,7));
console.log(Math.max(3,5,4,6,7));

console.log(Math.random()); 
console.log((Math.random()*10)+ 1); //return the random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1);     








