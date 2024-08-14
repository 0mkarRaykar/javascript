// Immediately Invoked Function Expression (IIFE)

// ()() // basic code structure for 'IIFE'

// IIFE in normal function
(function one() {
  console.log(`Printing One`);
})(); // semicolon ";" is must after immidiate excution method to end current function & start new function

// IIFE in Arrow Function
(() => {
  console.log(`Printing One Twice`);
})(); // But here depend's on code

// Passing argument in IIFE
((name) => {
    console.log(`Printing One Thrice on ${name}`);
  })("Local") // Here semicolon is not require bcoz it's last 'IIFE' in file