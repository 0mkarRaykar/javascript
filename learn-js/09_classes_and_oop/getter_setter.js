class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password}123`;
  }

  set password(value) {
    this._password = value;
  }
}
const unknown = new User("unknown@gmail.com", "abc")
console.log(unknown.password);