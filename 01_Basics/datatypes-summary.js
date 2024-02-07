// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456789876543234n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["APJ Abdul Kalam", "Virat Kohli"]
let myObj = {
    name:"Dev",
    age:22,
}

// Function
// Function Defination - function(){}

const myFunction = function(){
    console.log("Hey Guys");
}

// console.log(typeof bigNumber); //undefined

console.log(typeof outsideTemp);   // Object Type

console.log(typeof myFunction);    // Returns - Function Type


// All Non Primitive DataTypes are called Functio