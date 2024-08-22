const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(accumulator,currentValue){
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue
// },0)

const myTotal = myNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// console.log(myTotal);

const shoppingCart = [
    {
        course:"js course",
        price: 2999
    },
    {
        course:"py course",
        price: 3999
    },
    {
        course:"mobile dev course",
        price: 5999
    },
    {
        course:"data science course",
        price: 9999
    },
]
const priceToPay = shoppingCart.reduce((accumulator, item)=> accumulator + item.price,0)
console.log(priceToPay);
