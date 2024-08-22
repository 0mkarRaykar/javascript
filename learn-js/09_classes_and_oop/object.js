function multipleBy5(num) {
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username,
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);    
}

const known = new createUser("known", 25)
const unknown = createUser("unknown", 30)

known.printMe()