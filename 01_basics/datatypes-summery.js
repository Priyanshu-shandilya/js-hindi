// Primitive

// const { captureOwnerStack } = require("react")

// 7 types=> String, Boolean, Number, null, undefined,Symbol, BigInt

// Primitive

// const { captureOwnerStack } = require("react") // This line is not needed here

// 7 types => String, Boolean, Number, null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.5;
const isLoggedIn = false;

const outsidetemp = null;
let useremail;  // ✅ fixed line

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);  // false

const bigNumber = 1243243425654n;  // ✅ optional, but completes the primitive list

// Reference (Non-Primitive)
// Arrays, Objects, Functions
const heros = ["Shaktiman", "Nagraj", "Doga"];
let obj = {
    name: "Priyanshu",
    age: 20,
};

const myFunction = function () {
    console.log("Hello World");
};

console.log(typeof anotherId);  // symbol

// Link below to study
// https://tc39.es/ecma262/#sec-type-conversion

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory types:-
// 1) Stack (Primitive)
// 2) Heap (Non-Primitive)

let myname = "priyanshushandilya@gmail.com";
let anothername = myname;
anothername = "chaiaurcode";

console.log(anothername);  // chaiaurcode
console.log(myname);       // priyanshushandilya

let userOne = {
    name: "priyanshu",
    upi: "priyanshu@ybl",
};
let usertwo = userOne;

usertwo.name = "priyanshu";

console.log(userOne.name);  // priyanshu
console.log(usertwo.name); // priyanshu
