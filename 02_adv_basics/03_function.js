function myFunc(num1, num2) {
  return num1 + num2;
}
const result = myFunc(2, 3);
// console.log(result);

function loginUserMessage(username) {
  return `${username} just logged in`;
}
// console.log(loginUserMessage("omkar"));

// pass default parameter(s) in function
function loginUserMessage(username = "Joe") {
  return `${username} just logged in`;
}
// console.log(loginUserMessage());

// ++++++++ more on function +++++++++++++

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "omkar",
    product: "T-Shirt",
    price: 1999,
}
function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price of ${anyObject.product} is ${anyObject.price}`);
}
handleObject(user)

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
