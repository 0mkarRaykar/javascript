let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.omkar = function(){
    console.log(`omkar is present in all objects`);
}
// heroPower.omkar()

Array.prototype.heyOmkar = function(){
    console.log(`omkar says hello`);
}
// myHeros.heyOmkar()