// // // FOR PIERCE // // //
/*
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:


The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

uncompress("2c3a1t"); // -> 'ccaaat'
*/

function uncompress (string) {
    let returnString = "";
    for (let i = 0; i <string.length; i++) {
        if (string[i] % 1 === 0) {
            // returnString += build(string[1], string[i+1])
            console.log(build(string[i], string[i+1]))
        } else {
            continue;
        }
    }
}

function build(num, char, sum = "") { // num: 2, char: c sum: "cc"
    if (sum.length === num) return sum

    return build (num, char, sum += char)
}

console.log(uncompress("2c3a1t"))



// // // FOR ERIKA // // //
// const uncompress = (intString, outString = '') =>  {
//   // base case: when string is empty
//   if (!intString.length) return outString;

//   // handle first two chars in string [num, letter]
//   // add to new string based on num and letter
//   let num = intString[0];
//   let char = intString[1];
//   while (num > 0) {
//     outString += char;
//     num -= 1;
//   };

//   // recursive call
//   // pass in string from 2 char on
//   return uncompress(intString.slice(2), outString);
// }

// console.log(uncompress("2c3a1t")); // -> 'ccaaat'








