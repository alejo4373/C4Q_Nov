const mathModule = require('./math-module')

let sumResult = mathModule.add(5, 7);
let multiplyResult = mathModule.multiply(3, 4);
let divideResult = mathModule.divide(12, 4)
let squareResult = mathModule.square(5);

console.log(
    `
     sumResult: ${sumResult}
     multiplyResult: ${multiplyResult}
     divideResult: ${divideResult}
     squareResult: ${squareResult}`
)