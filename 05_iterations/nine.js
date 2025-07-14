const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {   //acc=>accumulator, currval=>current value
//     console.log(`acc: ${acc} and currval: ${currval}`);     acc and currval is used for declearation of shopings carts total price
//     return acc + currval
// }, 0)  //the acc value starts from 0 as shown here <= 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  //smart format of above written 

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);