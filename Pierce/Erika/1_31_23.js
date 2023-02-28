// // // FOR PIERCE // // //
/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]

input : array of integers 
output: array of integers 
edge: negatives 

*/
// function square (array) {
//  //test negatives 

// // declare an output array 
// const returnArr = [];

// // loop through input 
// for (let i = 0; i < array.length; i++) {
//     returnArr.push(array[i]**2)
// };

// return returnArr.sort();

// // loop through output -> sorting
// };

// console.log(square([-2, -1, 0, 2, 3]))

// // Other Solution // // 
// function make_squares(arr) {
//     const n = arr.length;
//     squares = Array(n).fill(0);
//     let highestSquareIdx = n - 1;
//     let left = 0,
//       right = n - 1;
//     while (left <= right) {
//       let leftSquare = arr[left] * arr[left],
//         rightSquare = arr[right] * arr[right];
//       if (leftSquare > rightSquare) {
//         squares[highestSquareIdx] = leftSquare;
//         left += 1;
//       } else {
//         squares[highestSquareIdx] = rightSquare;
//         right -= 1;
//       }
//       highestSquareIdx -= 1;
//     }
  
//     return squares;
//   }

  
//   console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
//   console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);


// // // FOR ERIKA // // //


/*
Given a sorted integer array in ascending order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// Input: array of integers (sorted in asc)
// Output: array of integers (sorted without duplicates), with empty spaces at end and k (num of unique integers)
/*
- in place, do not create any other arrays in memory
- be aware of empty arrays
*/


// declare k variable
// declare curr variable
// loop thru array (for)
    // to reassign curr, it MUST BE typeof num
    // check to see if curr is diff than el (if so, reassign curr and increm k)
    // if it's the same, make el null
    // if current el is null, exit loop, return k and sorted arr

// function inPlace(array) {
//     if (!array.length) return 0;
//     let k = 1;
//     let curr = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if (curr === array[i]) array[i] = null;
//         else {
//             curr = array[i];
//             k += 1;
//         }
//     }
//     return `Here is the sorted array: ${array.sort()}. There are ${k} unique integers.`
// }

// console.log(inPlace([0,0,1,1,1,2,2,3,3,4])); 








