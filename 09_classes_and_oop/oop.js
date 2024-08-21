// object literal
const user = {
  username: "omkar",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("function is here");
    // console.log(`username: ${this.username}`);
    // console.log(this);
  },
};
// console.log(user);

// constuctor
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}
const userOne = new User("omkar", 12, true);
const userTwo = new User("unknown", 11, false);
// console.log(userOne);
// console.log(userTwo);
