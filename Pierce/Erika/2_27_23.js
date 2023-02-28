/*
Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.
*/

//input: any number of arrays 
//output: 1 array

// function commonElements(...arr) {
//     //create a cache object 
//     const cache = {};
//     const returnArray = [];
//     const flatArray = arr.flat();

//     for (let i = 0; i < flatArray.length; i++) {
//       !cache[flatArray[i]] ? cache[flatArray[i]] = 1 : cache[flatArray[i]] += 1;
//     };

//     for(const key in cache) {
//       if (cache[key] === 3) returnArray.push(key);
//     }

//    return returnArray;

// };


// arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
// arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
// arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

// console.log(commonElements(arr1, arr2, arr3)) // -> [2, 2000, 3, 'dog']



// // // FOR ERIKA // // //

//Given the root of a binary tree, invert the tree, and return its root.

function BinarySearchTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  }
   

const invertTree = function(root) {
 if (root) {
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
 }

 return root;
};

const tree = new BinarySearchTree(5);
tree.left = new BinarySearchTree(4);
tree.right = new BinarySearchTree(6);
tree.left.left = new BinarySearchTree(3);
tree.right.right = new BinarySearchTree(7);

console.log(tree)
console.log(invertTree(tree))

//     5
//   4   6
// 3       7















