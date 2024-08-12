const mySymbol = Symbol("Key1")

const User = {
    name: "omkar",
    "full name": "omkar raykar",
    [mySymbol]: "Key1",
    age: 18,
    location: "Pune",
    email: "omkar@gmail.com",
    isLoggedIn: true
}
// console.log(User.email); // method 1 to access object
// console.log(User["email"]); // method 2 to access object
// console.log(User["full name"]); // try accessing this value using method 1
// console.log(User[mySymbol]);

User.email = "omkar@google.com"
// Object.freeze(User) // freeze all the changes after this line
User.email = "omkar@microsoft.com"
// console.log(User);

User.greeting = function(){
    console.log("Hello user");
}

User.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(User.greeting());
console.log(User.greetingTwo());
