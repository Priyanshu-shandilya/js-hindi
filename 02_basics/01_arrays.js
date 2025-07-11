const myArray=[1,2,3,4,5,true,"priyanshu"]
const myheros=["Shaktiman","spiderman"]
const myArray2= new Array(1,2,3,4)
console.log(myArray[0]);

// //returns the value of the indivisual indexes.

// //Array Methods
// myArray.push(6)
// console.log(myArray);  //add the value in array
// myArray.pop()

// myArray.unshift(9)  //insert at start
// myArray.shift()        //remove the element from start
// console.log(myArray);

console.log(myArray.includes(9));     //returns the true or false value that 9 is in the array or not
console.log(myArray.indexOf(9));   //returns the array index
console.log(myArray)

const newarray = myArray.join()
console.log(myArray)
console.log(newarray)    //converts array into string 
console.log(typeof newarray);

console.log("A",myArray);
const myn1=myArray.slice(1,3)   //returns the section of the array and excludes the index of the last array given 
console.log(myn1);
console.log("B" ,myArray);

const myn2=myArray.splice(1,3)   //removes the given indexes elements from the original array
console.log("c", myArray);

console.log(myn2);









