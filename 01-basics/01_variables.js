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

/*
    let: let has block scope, meaning it is limited to the block ({ }) in which it is defined, as well as any nested blocks. It is not accessible outside of those blocks.

    var: var has functional scope or global scope, depending on where it's declared. If declared outside of any function, it has global scope. If declared within a function, it has functional scope, meaning it is limited to that function and can't be accessed from outside.

    const: const also has block scope, just like let. It behaves similarly to let, but it additionally enforces immutability on the variable. This means that once a value is assigned to a const variable, it cannot be reassigned.

    So, in summary:

    let and const have block scope, meaning they're limited to the block ({ }) in which they're defined.
    var has functional scope if declared within a function, and global scope if declared outside any function.
    All three are subject to the rules of lexical scoping in JavaScript, where the scope is determined by the placement of the variable declaration in the code.
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