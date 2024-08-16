// for loop syntax

for (let index = 1; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

// nested for loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    }
}

// break and continue in for loop
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break; // loop will end
    }
    // console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        continue; // loop will skip this condition and will continue execution
    }
    // console.log(i);
}