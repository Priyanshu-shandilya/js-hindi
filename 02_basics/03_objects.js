//Singleton

//Object Literals
const mySym=Symbol("key1")

const JsUser = {
    name: "Priyanshu",
    [mySym]: "myValue",
    location: "Deoghar",
    email: "priyanshushandilya7@gmail.com",
    age: 18,
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"],
    
    greeting: function() {
        console.log('Hello JS Users');
    },
    greetingtwo: function() {
        console.log(`Hello JS Users, ${this.name}`);
    }
};


JsUser.email = "chaiaurcodewithme222@gmail.com"; // No effect due to freeze
console.log(JsUser.email); // Still original email

console.log(JsUser[mySym]); // ✅ Symbol access
JsUser.greeting();          // ✅
JsUser.greetingtwo();       // ✅

