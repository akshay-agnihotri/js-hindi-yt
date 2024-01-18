// # primitive 

//  7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score  = 100
const scoreValues = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456789234567743n;


// # NON-primitive(Reference)

// Arrays , Objects , Functions

const heroes = ["shaktimaan","naagraj","doga"];
let myObj = {
    name:"akshay",
    age:22,
}
const myFunction = function(){
    console.log("Hello World!");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp); // null => "object"
// console.log(typeof userEmail); // undefined => "undefined"
// console.log(typeof id); 
// console.log(typeof myFunction); // null => "function" or "function object"

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ****************************************************************

// stack: (primitive) , Heap(Non-Primitive)

let myYoutubeName = "akshay@gmail.com"
let anotherName = myYoutubeName
anotherName =  "namastedunia"
// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email:"user1@gmail.com",
    upi:"user1@abc"
};

let userTwo = userOne

userTwo.email = "akshay@gmail.com"

// console.log(userOne);
// console.log(userTwo);

let myself = function(){
    console.log("akshay");
};
let myself1 = myself
myself = function(){
    console.log("akshay agnihotri");
} 
// myself();
// myself1();









