const programming = ["js", "rb", "py", "java", "cpp"];
const values = programming.forEach(function (items) {
  // console.log(items);
});
// console.log(values); // forEach do not return value(s)

// +++++++++    method 1    ++++++++++
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// ++++++++    method 2    +++++++++++
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// ++++++++   method 3   +++++++++
// const newNums = []
// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// ++++++++ more on filters ++++++++

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: 2010,
  },
  {
    title: "Nothing Less",
    genre: "Dystopian",
    publish: 1949,
    edition: 2003,
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: 2004,
  },
  {
    title: "Moby-Dick",
    genre: "Adventure",
    publish: 1851,
    edition: 2015,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: 2000,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Literary Fiction",
    publish: 1951,
    edition: 2001,
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: 2018,
  },
  {
    title: "Brave New World",
    genre: "Science Fiction",
    publish: 1932,
    edition: 2007,
  },
  {
    title: "Jane Eyre",
    genre: "Gothic",
    publish: 1847,
    edition: 2011,
  },
  {
    title: "Fahrenheit 451",
    genre: "Dystopian",
    publish: 1953,
    edition: 2013,
  },
];

// const userBooks = books.filter((bk)=> bk.genre === 'Adventure')
const userBooks = books.filter((bk)=> bk.publish >= 1953)
// console.log(userBooks);