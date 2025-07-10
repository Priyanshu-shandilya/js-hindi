const name = "Priyanshu";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
const gameName=new String("Priyanshu")
// console.log(gameName[0])
// console.log(gameName._proto_);
// console.log(gameName.length)

// console.log(gameName.toUpperCase())


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));
const newString = gameName.substring(0, 4);
console.log(newString); // Output: "Pria"

const newStringOne = " haiaurcode  ";
console.log(newStringOne);         
console.log(newStringOne.trim());  //removes all the extra spaces 

const url="https://priyanshu.com/%20strings.com"
console.log(url.replace('%20','- '));
console.log(url.includes('priyanshu'))
console.log(gameName.split('-'));




