const a = 10;
let b = 20;
var c = 30;
if (true) {
  const a = 100;
  let b = 200;
  var c = 300;
  //   console.log("Inner: ", a);
  //   console.log("Inner: ", b);
}

// console.log("Outer: ", a);
// console.log("Outer: ", b);
// console.log("Outer: ", c); //Why o/p is 300 => bcoz of scope

function one() {
  let username = "omkar";

  function two() {
    let website = "google.com";
    // console.log(username);
  }
  // console.log(website); // intentionally brought error
  two();
}
one();

if (true) {
  const username = "omkar";
  if (username === "omkar") {
    const website = " google.com";
    console.log(username + website);
  }
//   console.log(website); // intentionally brought error
}
// console.log(username); // intentionally brought error
