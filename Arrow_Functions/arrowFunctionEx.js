// # ES6 - Part 1 - Exercises

// ## Template Literals
// Write a function called `makeStory` that uses the following excerpt:

const makeStory = name => { 
    return `Remember, go straight to Grandma's house," ${name}'s mother cautioned.  "Don't dawdle along the way and please don't talk to strangers!  The woods are dangerous."
"Don't worry, mommy," said ${name}, "I'll be careful.`
}

console.log(makeStory("Alejandro"))


// ## Arrow Functions
// Write solutions to the following problems using arrow functions only (Do not use the `function` keyword). 
// When declaring variables, only use `let` or `const`.

// ### Q1. forEach-log
// Write a function that uses the [`forEach`](http://www.w3schools.com/jsref/jsref_forEach.asp) array method to log 
// every member of an array to the console. The function should only take one argument, the array. The function should NOT use a `for` loop.
const forEachLog = arr => {
    arr.forEach(elem => console.log(elem))
}

forEachLog([1,2,3,4,5])


// ### Q2. simple-filter
// Write a function called `greaterThan10` that uses the `filter` method to filter an array and only return numbers 
// that are greater than 10. The function should take an array of numbers as an argument.

// Examples:

// ```js
// greaterThan10([1, 2, 3, 11, 12, 13]); //returns [11,12,13]
// greaterThan10([11, 2, 3, 1, 22, 4, 33]); //returns [11,22,33]
// ```

// ### Q3. simple-filter-2

// Write a function called `filterEvens` that uses the `filter` method to filter an array and only return the even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// Examples:

// ```js
// filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
// filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]
// ```

// ### Q4. forEach-sum

// Write a function called `forEachSum` that takes in an array of numbers as an argument and returns the sum of the array. The function should use the `forEach` array method and should NOT use a `for` loop or `while` loop.

// ### Q5. implement-forEach

// Write a function called `forEach` that takes in two arguments: an array and a function. `forEach` should apply the passed in function to every member of the array. It should not return anything.

// Example:

// ```javascript
// forEach(arr, log); // logs 1, 2, 3, 4, 5

// var arr = [1,2,3,4,5];

// function log(val) {
//   console.log(val);
// }
// ```

// ### Q6. map-triple-array

// Write a function that uses the `map` array method to triple every member of an array. The function should only take one argument, the array. The function should NOT use a loop.

// ### Q7. map-strings-to-nums

// Write a function called `stringsToNums ` that takes an array of strings, converts them to numbers, and returns a new array containing those numbers. Use the `map` array method, do not use any loops.

// Examples:

// ```js
// stringToNums(["4", "3", "9"]); //returns [4,3,9]
// stringToNums(["1", "22", "7"]); //returns [1,22,7]
// ```

// ### Q8. first-letter-uppercase-map

// Write a function that takes a string as a parameter and converts the first letter of each word of the string to upper case. However, do not use a `for` loop, `while` loop, or `forEach`.

// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// ### Q9. implement-map

// Write a function called `map` that takes in two arguments: an array and a function. `map` should apply the passed in function to every member of the array, and return a new array with the results.

// Example:

// ```javascript
// var arr = [1, 2, 3, 4, 5];

// function double(num) {
//   return num * 2;
// }

// map(arr, double); // returns [ 2, 4, 6, 8, 10 ]
// ```

// ### Q10. reduce-sum

// Write a function called `sum` that uses the `reduce` method to sum up an array of numbers. Do NOT use a loop.

// Examples:

// ```js
// sum([1, 2, 3, 4, 5]); //returns 15
// sum([6, 7, 7]); //returns 20
// ```

// ### Q11. reduce-min

// Write a function called `reduceMin` that uses the `reduce` method to return the minimum number in an array of numbers. Do NOT use a loop.

// Examples:

// ```js
// reduceMin([2, 3, 4, 5, 1]); //returns 1
// reduceMin([6, 7, 7, 4]); //returns 4
// reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100
// ```

// ### Q12. count-odds-and-evens

// Write a function named `countOddsAndEvens` that takes an array of numbers as argument. Then function should return an object that has two properties: `odds` and `evens`, that contain the number of odd numbers in the array, and the number of the even numbers in the array, respectively. Use the `reduce` method. Do not use a `for` loop, `while` loop, or `forEach`.

// Examples:

// ```javascript
// countOddsAndEvens([11, 2, 36, 4, 15]);
// // returns {odds: 2, evens: 3}
// countOddsAndEvens([1, 2, 3, 4, 5, 5, 99, 101]);  
// // returns {odds: 6, evens: 2}
// ```