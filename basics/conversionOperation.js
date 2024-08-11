// let score = "33abc"
// let score = null
// let score = undefined
let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 
// 1. 33abc => 33
// 2. 33abc => NaN
// 3. true => 1; false => 0

let isLoggedIn = true // try putting different value
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "omkar" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
