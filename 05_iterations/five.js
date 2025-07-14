const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){    
//     console.log(item);
// }

// coding.forEach(printMe)  give the reference it will print as its printing for printMe
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
 } )

const myCoding = [
    {
        languageName: "javascript",   //objects decleared under array
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {    //takes each objects from myCoding array 
    
    console.log(item.languageName);
    console.log(item.languageFileName);    //extracts the languageName from the array
} )