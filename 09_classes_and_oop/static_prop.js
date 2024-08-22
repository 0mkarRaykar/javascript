class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    // static will not give access to any other entity
    return `123`;
  }
}
const omkar = new User("omkar");
// console.log(omkar.createId()) // remove static word to run this line

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const known = new Teacher("known","known@gmail.com")
known.logMe()
