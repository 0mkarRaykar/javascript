// let score = "33abc"
let score = null
// let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // 1. dataType is NaN => Not a Number" if input is 33abc or undefined
// 2. dataType is null => if input is null
