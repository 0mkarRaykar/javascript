// for loop syntax

for (let index = 1; index <= 10; index++) {
  const element = index;
  // console.log(element);
}

// nested for loop

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);
  }
}

// break and continue in for loop
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log(`Detected 5`);
    break; // loop will end
  }
  // console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log(`Detected 5`);
    continue; // loop will skip this condition and will continue execution
  }
  // console.log(i);
}

// +++++++ more on for loops ++++++++++++++++
// ++++++++++    for of    ++++++++++++++

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello World";
for (const greet of greeting) {
  // console.log(greet);
}

// +++++++++++    map    +++++++++++++
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // this will not print bcoz Map() only print unique values
// console.log(map);

//for-of loop on map
for (const [key, value] of map) {
  // console.log(key + ': ' + value);
}

// for-in loop on object;   for-of will not work on objects
const myObject = {
  game1: "NFS",
  game2: "BGMI",
};
for (const key in myObject) {
//    console.log(key); // o/p will be key
//    console.log(myObject[key]); // o/p will value
//    console.log(`key is ${key} and value is ${myObject[key]}`);   
}

// for-in loop on array;

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
  // console.log(programming[key]);  key
}