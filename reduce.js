// function countingOdds(arr){
//    return arr.reduce(function(acc, curr) {
//         if(curr % 2 !== 0){
//             console.log("acc= " + acc)
//            return acc + 1;
//         } else {
//             console.log("acc= " + acc)
//             return acc;
//         }

//     }, 0)
// }

// console.log(countingOdds([1, 2, 3, 4, 5, 6]))

function countingOddsEven(arr) {
    return {
        odd: arr.reduce((acc, curr) => { return curr % 2 !== 0 ? acc + 1 : acc }, 0),
        even: arr.reduce((acc, curr) => { return curr % 2 === 0 ? acc + 1 : acc }, 0)
    }
}

let object = countingOddsEven([1, 2, 3, 4, 5, 6, 7, 9]);
console.log(object.even)
console.log(object.odd)
