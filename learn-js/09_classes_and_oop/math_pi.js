const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // only works on property
// console.log(descriptor);

const product = {
  name: "tv", // this are properties
  price: 25000,
  isAvailable: true,

  orderProduct: function () {
    console.log("something went wrong");
  },
};
// console.log(Object.getOwnPropertyDescriptor(product)); // showing defined bcoz product is object not a property
console.log(Object.getOwnPropertyDescriptor(product, "name"));

// code to disrupt

// Object.defineProperty(product, "name", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(product, "name"));

for (let [key, value] of Object.entries(product)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
