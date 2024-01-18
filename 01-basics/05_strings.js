const name = "akshay"
const repoCount = 50

// console.log(name + repoCount);   // bad practise

// console.log(`hello my name is ${name}  and my repoCount is ${repoCount}`);

const gameName = new String("this is string object")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // original gameName not changed
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));


let newString = gameName.substring(0,3) // only 0-2 index char
// console.log(newString);

const anotherString = gameName.slice(0,4) 
const anotherString1 = gameName.slice(-3,-1) 
// console.log(anotherString);
// console.log(anotherString1);

const url  = "https:/akshay.com"
// console.log(url.replace('akshay','-'));

console.log(url.includes("sundar"));

console.log(gameName.split(' '));
