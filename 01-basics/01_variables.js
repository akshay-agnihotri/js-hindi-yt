// to declare a const there is one way.
const accountId=14423566

/*
to declare a variable there are two ways.
initially js has only "var" keyword to declare a variable.
prefer not to use var
bcz of issue in block scope and functional scope.
*/

/*
All about Functions and Scopes in JavaScript
https://www.geeksforgeeks.org/all-about-functions-and-scopes-in-javascript/
*/

let accountEmail="akshay@gmail.com"
var accountPassword="akshay@1234"
let accountstate;

/*
declaring varibales without using let,var and const is bad practise
https://dev.to/zhiyueyi/variable-declaration-in-javascript-var-let-or-const-1789#:~:text=myVariable%20%3D%20'abc'%3B%20It's%20possible,have%20created%20a%20global%20variable.&text=The%20result%20shows%20test%20%2C%20which%20means%20it%20works!
*/

accountCity="jaipur"



// ques-1:-it is imp to add semicolon in js
// ans=>https://www.geeksforgeeks.org/semicolon-in-javascript/


//accountId=2  (not allowed-const variable)
//console.log(accountId);
accountEmail="abs@gmail.com"
accountPassword="123444"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])