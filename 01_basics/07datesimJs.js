//Dates

// let myDate=new Date()  //shows the current date
// console.log(myDate.toString())   //got the exact date
// console.log(myDate.toLocaleString()) 
// console.log(typeof myDate)

let myCreatedDate= new Date(2025,6,10)
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let mytimestamp=Date.now()
// console.log(mytimestamp);   //shows the time in millisecond

// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //round off the decimal value

let myDate=new Date() 
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getDay());

// '${newDate.getDay()} and the time is....'

newDate.toLocaleString('default',{
   weekday:"long",                          //sets day and weekends
   timeZone:''
})