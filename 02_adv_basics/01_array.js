const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// console.log(myArr.push(9)); // put 9 at last index
// console.log(myArr);
// console.log(myArr.pop()); // remove last index element
// console.log(myArr);

// myArr.unshift(9) // put 9 at first index
// myArr.shift() // remove first element from arr[]

// console.log(myArr.includes(9)); // checks in arr[] if 9 is present or not
// console.log(myArr.indexOf(9)); // checks at index of an arr[] and gives element if present

// const newArr = myArr.join() // join the arr[] and convert into string

// console.log(myArr);
// console.log(typeof newArr);

// diff b\w slice & splice

// console.log("Arr[] as it is ", myArr);

const myNewArr1 = myArr.slice(1, 3); // Arr[] will not manipulate
// console.log("Arr[] using slice ",myNewArr1);
// console.log("original Arr[] after using slice method ",myArr);

const myNewArr2 = myArr.splice(1, 3); // Arr[] will manipulate
// console.log("Arr[] using splice ", myNewArr2);
// console.log("original Arr[] after using splice method ", myArr);

// ++++++++++++++++++ more on arrays +++++++++++++++++++++

const marvel_heros = ["Ironman", "Thor", "Hulk", "Spiderman"];
const dc_heros = ["Superman", "Batman", "Flash", "WonderWoman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);

const all_heros = marvel_heros.concat(dc_heros) // method 1 to print or merge 2 arr[]
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // method 2 to print or merge 2 arr[]
// console.log(all_new_heros);

// +++++++++++++++ happens rarely +++++++++++++++++

const another_arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]]
const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);


// +++++++++++++ check isarray or not ++++++++++++++++++

// console.log(Array.isArray("omkar")); // check isarray or not
// console.log(Array.from("omkar")); // convert into array
// console.log(Array.from({name: "omkar"})); // special case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
