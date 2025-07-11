const marvel_heros = ["name", "class"];
const dc_heros = ["superman", "spiderman"];

const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]   //merged both the arrays elements 
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5],[3,5],6,7,[8,6]]   //merge all the elements and removes all the braces

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Priyanshu"))   //make the array of elements (name)
console.log(Array.from("Priyanshu"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


