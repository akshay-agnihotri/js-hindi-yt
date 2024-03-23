// array

/*
    In JavaScript, arrays aren't primitives
    but are instead Array objects.
*/

const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

/*

    JavaScript arrays are resizable and can contain
    a mix of different data types.
    (When those characteristics are undesirable, use typed arrays instead.)

    ***************************************************************************
    ques= what is typed arrays.
    Array-Like: Typed arrays in JavaScript are similar
    to regular arrays, but they are more specialized.
    They have a fixed size and can only contain elements
    of a specific type, like numbers or bytes.

    Raw Binary Data: Instead of storing typical JavaScript
    objects like strings or other arrays, typed arrays
    let you work directly with raw binary data. 
    This means you can store information like numbers
    or bytes exactly as they are in the computer's memory.

    Memory Buffers: Think of a memory buffer as a reserved space in your computer's memory 
    where you can store data. Typed arrays provide
    a way to read from and write to these memory buffers
    directly, which can be really useful for tasks like
    processing images or working with network data.

    *******************************************************************************

*/



// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


/*
    All standard built-in copy operations with any
    JavaScript objects create shallow copies, rather than deep copies

    Shallow copy
    two objects o1 and o2 are shallow copies if:
    1.They are not the same object (o1 !== o2).
    2.The properties of o1 and o2 have the same names in the same order.
    3.The values of their properties are equal.
    4.Their prototype chains are equal.

    DeepCopy
    deep copies more formally as:
    1.They are not the same object (o1 !== o2).
    2.The properties of o1 and o2 have the same names in the same order.
    3.The values of their properties are deep copies of each other.
    4.Their prototype chains are structurally equivalent.
    
*/
// ex--shallow Copy
const arr = [1,2]
const arr1 = arr.slice() //creating shallow copy
// console.log(arr1); // [1,2]
if(arr == arr1){
    console.log("hello");
}
arr[1]=3
// console.log(arr); // [1,3] bcz arr and arr1 are pointing to the same reference point.

// ex-deepCopy
const array = [1,2]
const array1 = JSON.parse(JSON.stringify(array));
// console.log(array1); //[1,2]
array1[1]=3
console.log(array); //[1,2]