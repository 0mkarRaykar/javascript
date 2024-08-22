// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toDateString()); // day + mm dd yyyy
// console.log(myDate.toLocaleTimeString()); // only gives time as o/p
// console.log(myDate.toLocaleString()); // date + time
// console.log(myDate.toLocaleDateString()); // only gives date as o/p

// let myCreatedDate = new Date(2024, 7, 12) // yyyy mm dd; mm start from 0 bcoz arr[]
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 7, 12, 5, 3)
// let myCreatedDate = new Date("2024-08-12") // yyyy mm dd
// let myCreatedDate = new Date("08-12-2024") // mm dd yyyy
// console.log(myCreatedDate.toLocaleString());


// timestamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));
