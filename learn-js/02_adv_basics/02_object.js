// ++++++++++++++ object literal ++++++++++++++++

const mySymbol = Symbol("Key1");

const User = {
  name: "omkar",
  "full name": "omkar raykar",
  [mySymbol]: "Key1",
  age: 18,
  location: "Pune",
  email: "omkar@gmail.com",
  isLoggedIn: true,
};
// console.log(User.email); // method 1 to access object
// console.log(User["email"]); // method 2 to access object
// console.log(User["full name"]); // try accessing this value using method 1
// console.log(User[mySymbol]);

User.email = "omkar@google.com";
// Object.freeze(User) // freeze all the changes after this line
User.email = "omkar@microsoft.com";
// console.log(User);

User.greeting = function () {
  // console.log("Hello user");
};

User.greetingTwo = function () {
  // console.log(`Hello user, ${this.name}`);
};

// console.log(User.greeting());
// console.log(User.greetingTwo());

// ++++++++++++++++   singleton object   +++++++++++++++++++++++

// const tinderUser = new Object() // singleton object
const tinderUser = {}; // literal object

tinderUser.id = "123abc";
tinderUser.name = "Joe";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "omkar",
      lastname: "raykar",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };
const obj3 = { e: 1, f: 2 };

// const obj4 = {obj1, obj2, obj3} // problematic o/p
// const obj4 = Object.assign({}, obj1, obj2, obj3); // method 1 to access object
const obj4 = { ...obj1, ...obj2, ...obj3 }; // method 2 to access object
// console.log(obj4);

// objects inside an array
const users = [
  {
    id: 1,
    email: "one@gmail.com",
  },
  {
    id: 1,
    email: "one@gmail.com",
  },
  {
    id: 1,
    email: "one@gmail.com",
  },
];
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// +++++++++++ de-structuring in object +++++++++++++++

const course = {
  coursename: "JavaScript",
  price: 999,
  courseInstructor: "Joe",
};

const { courseInstructor } = course;
const { courseInstructor: instructor } = course; // de-structuring name
// console.log(courseInstructor);
// console.log(instructor);
