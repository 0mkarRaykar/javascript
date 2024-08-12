const myArr = [0, 1, 2, 3, 4, 5]
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

const myNewArr1 = myArr.slice(1, 3) // Arr[] will not manipulate
// console.log("Arr[] using slice ",myNewArr1);
// console.log("original Arr[] after using slice method ",myArr);


const myNewArr2 = myArr.splice(1, 3) // Arr[] will manipulate
// console.log("Arr[] using splice ", myNewArr2);
// console.log("original Arr[] after using splice method ", myArr);

