/*
Falsy Values:
  false
  null
  undefined
  ""
  0, 0.0, -0
  NaN
*/

/*
Truthy Values: (just a few surprising ones)
  []
  {}
*/

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

// you can also repeat the NOT operator twice to see a value's boolean value or if you use the NOT operator once, you can see the opposite boolean value
console.log(!!'');
console.log(!!0);
console.log(!!NaN);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!![]);
console.log(!!{});