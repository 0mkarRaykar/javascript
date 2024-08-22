// function based getter and setter

function User(email, password) {
  (this._email = email), (this._password = password); // () came bcoz i'm formating code structure no need to put ()

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}
const unknown = new User("unknown@gmail.com", "password");
console.log(unknown.email);
