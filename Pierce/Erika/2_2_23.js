// // // FOR PIERCE // // //
/* 
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

compress('ccaaatsss'); // -> '2c3at3s'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'

input: a string 
output: string (with nums)
edge: single letters, empty string

*/

// function compress (string) {
// //edge case 
// if (!string.length) return "invalid input";

// //declare a cache obj
// const cache = {};
// //delcare the return string 
// let returnString = ""

// //interate through the string 
// for (let i = 0; i < string.length; i++) {
//     //build cache obj 
//     if (cache[string[i]]) {
//         cache[string[i]] += 1
//     } else {
//         cache[string[i]] = 1
//     }
// };

// //iterate through the cache obj
// for (const prop in cache) {
//     console.log(cache)
//     //check if value > 0 
//     if(cache[prop] === 1) {
//         returnString += prop
//     } else {
//         returnString += cache[prop] + prop
//     }
// };
// //build return string 
// return returnString;
// }

// console.log(compress('ccaaatsss')); // -> '2c3at3s'
// console.log(compress('nnneeeeeeeeeeeezz')); // -> '3n12e2z'


// // // FOR ERIKA // // //

/*
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.
*/


/*
INPUT: number
OUTPUT: number (sum of all individual numerals)
EDGE: no args, incorrect data type
*/

// const addUp = (num, sum = 0) => {
//   if (num < 0) return sum;
//   sum += num;
//   return addUp(--num, sum);
// }

// console.log(addUp(600)); // ➞ 180300
// console.log(addUp(4)); // ➞ 10





