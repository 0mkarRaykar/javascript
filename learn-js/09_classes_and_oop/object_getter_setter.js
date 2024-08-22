// object based getter and setter

const User = {
  _email: "unknown@gmail.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};
const newUser = Object.create(User)
console.log(newUser.email);
