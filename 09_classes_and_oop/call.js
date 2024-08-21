function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const store = new createUser("unknown", "unknown@tg.com", "123")
console.log(store);