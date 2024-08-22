// forEach loop on array
const programming = ["js", "rb", "py", "java", "cpp"];
programming.forEach(function (items) {
  //   console.log(items);
});

// using arrow function
programming.forEach((values) => {
  //   console.log(values);
});

programming.forEach((items, index, arr) => {
  // console.log(items, index, arr);
});

// forEach on object

const coding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "python",
  },
];
coding.forEach((item) => {
  // console.log(item.languageName); // give a key
  // console.log(item.languageFileName); // give a value
  // console.log(item); // give whole object
});