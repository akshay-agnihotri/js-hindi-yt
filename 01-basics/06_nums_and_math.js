const score = 400

const balance = new Number(100.345)
// console.log(balance); // o/p => [Number: 100.345]

// console.log(balance.toString());
// console.log(balance.toString().length); // we can use string methods

// console.log(balance.toFixed(2)); // o/p => 100.34

const anotherNumber = 123.8966
// console.log(anotherNumber.toPrecision(3)); // o/p => 124
// console.log(anotherNumber.toPrecision(2)); // o/p => 1.2e+2
// console.log(anotherNumber.toPrecision(4)); // o/p => 123.9

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN')); // o/p => 10,00,000

// **********************Maths******************************
console.log(Math);
// console.log(Math.abs(-5)); // o/p =>  5
// console.log(Math.round(5.6)); // o/p => 6
// console.log(Math.floor(5.8)); // o/p => 5
// console.log(Math.ceil(5.2)); // o/p => 6
// console.log(Math.min(5.2 , 5.6 , 6 , 4)); // o/p => 4
// console.log(Math.min(5.2 , 5.6 , 6)); // o/p => 5.2
 
// console.log(Math.random()); // returns a pseudo-random number between 0 and 1, excluding 1.

// console.log( ( Math.random()*10 ) + 1 ); // making a random func which returns value >=1
// console.log( Math.floor( (Math.random()*10) ) + 1 ); // returns a pseudo-random number range [1,10],

const min = 10
const max = 20
// console.log( Math.floor( Math.random() * (max - min + 1) ) +  min  ); // returns a pseudo-random number range [10,20]









