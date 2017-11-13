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
const greaterThan10 = arr => {
   return arr.filter(elem => elem > 10);
}

console.log(greaterThan10([1, 2, 3, 11, 12, 13])); //returns [11,12,13]
console.log(greaterThan10([11, 2, 3, 1, 22, 4, 33])); //returns [11,22,33]


// ### Q3. simple-filter-2
// Write a function called `filterEvens` that uses the `filter` method to filter an array 
// and only return the even numbers. The function should take an array of numbers as an argument, and should not use a loop.
const filterEvens = arr => {
    return arr.filter(num => num % 2 === 0)
}

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]


// ### Q4. forEach-sum
// Write a function called `forEachSum` that takes in an array of numbers as an argument and returns 
// the sum of the array. The function should use the `forEach` array method and should NOT use a `for` loop or `while` loop.

const forEachSum = arr => {
    return arr.reduce((acc, curr) => acc + curr) //I need parenthesis for the parameters if its more tha one param
}
console.log(forEachSum([1, 2, 3, 11, 12, 13])); //returns 42

// ### Q5. implement-forEach
// Write a function called `forEach` that takes in two arguments: an array and a function. `forEach` should apply 
// the passed in function to every member of the array. It should not return anything.
const anotherForEach = (arr, callback) => {
    callback(arr)
}

function log(val) {
    console.log(val);
 }
 
anotherForEach([1,2,3,4,5], log); // logs 1, 2, 3, 4, 5


// ### Q6. map-triple-array
// Write a function that uses the `map` array method to triple every member of an array. 
// The function should only take one argument, the array. The function should NOT use a loop.

const trippleArr = arr => arr.map(num => num * 3)
console.log(trippleArr([2, 3, 4, 5])) //[6, 9, 12, 15]

// ### Q7. map-strings-to-nums
// Write a function called `stringsToNums ` that takes an array of strings, converts them to numbers, 
// and returns a new array containing those numbers. Use the `map` array method, do not use any loops.
const arrStrsToNums = arr => arr.map(str => Number(str))

console.log(arrStrsToNums(["4", "3", "9"])); //returns [4,3,9]
console.log(arrStrsToNums(["1", "22", "7"])); //returns [1,22,7]


// ### Q8. first-letter-uppercase-map
// Write a function that takes a string as a parameter and converts the first letter of each word of the
//  string to upper case. However, do not use a `for` loop, `while` loop, or `forEach`.
const capitalize = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

console.log(capitalize('the quick brown fox')) //'The Quick Brown Fox'

// ### Q9. implement-map
// Write a function called `map` that takes in two arguments: an array and a function. `map` should 
// apply the passed in function to every member of the array, and return a new array with the results.

const newMap = (arr, callback) => {
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callback(arr[i]))
    }
    return resultArr
}
var arr = [1, 2, 3, 4, 5];

function double(num) {
  return num * 2;
}

console.log(newMap(arr, double)); // returns [ 2, 4, 6, 8, 10 ]


// ### Q10. reduce-sum
// Write a function called `sum` that uses the `reduce` method to sum up an array of numbers. Do NOT use a loop.
 const reduceSum = arr => { 
     return  arr.reduce((acc, curr) => acc + curr) 
    }

console.log(reduceSum([1, 2, 3, 4, 5])); //returns 15
console.log(reduceSum([6, 7, 7])); //returns 20


// ### Q11. reduce-min
// Write a function called `reduceMin` that uses the `reduce` method to return the minimum number in an array of numbers. Do NOT use a loop.
const reduceMin = arr => { 
    return arr.reduce((acc, curr) => curr < acc ? curr : acc) 
}

console.log(reduceMin([2, 3, 4, 5, 1])); //returns 1
console.log(reduceMin([6, 7, 7, 4])); //returns 4
console.log(reduceMin([10, 0, 100, 1, -100, 20, 33])); //returns -100


// ### Q12. count-odds-and-evens
// Write a function named `countOddsAndEvens` that takes an array of numbers as argument.
// Then function should return an object that has two properties: `odds` and `evens`, 
// that contain the number of odd numbers in the array, and the number of the even numbers in the array,
// respectively. Use the `reduce` method. Do not use a `for` loop, `while` loop, or `forEach`.
function countOddsAndEvens(arr) {
    return {
        odds: arr.reduce((acc, curr) => { return curr % 2 === 0 ? acc + 1 : acc }, 0),
        evens: arr.reduce((acc, curr) => { return curr % 2 !== 0 ? acc + 1 : acc }, 0)
    }
}

console.log(countOddsAndEvens([11, 2, 36, 4, 15])); // returns {odds: 2, evens: 3}
console.log(countOddsAndEvens([1, 2, 3, 4, 5, 5, 99, 101]));  // returns {odds: 6, evens: 2}
