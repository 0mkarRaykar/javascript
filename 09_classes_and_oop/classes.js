// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const unknown = new User("unknown", "unknown@gmail.com", "123");
// console.log(unknown.encryptPassword());
// console.log(unknown.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const known = new User("known", "known@gmail.com", "123")
console.log(known.encryptPassword());
console.log(known.changeUsername());