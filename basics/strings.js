const name = "omkar"
const repoCount = 2

// console.log(name + repoCount);
console.log(`my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('BattleGround Mobile India')
// console.log(gameName[0]); //accessing 0th index
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('G'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-12,1)
// console.log(anotherString);

const url = "https://omkar.com/omkar%20raykar"
// console.log(url.replace('%20','-'));
// console.log(url.includes('omkar'));

console.log(gameName.split(' '));
