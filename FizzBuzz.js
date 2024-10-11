// THE OLDY FIZZBUZZ CHALLENGE LOL

// Not-So-Boring Solution Below
for (let i = 1; i <= 100; i++) {
    // Determine what to print using ternary operators
    const output = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" : // Check if divisible by both 3 and 5
                   (i % 3 === 0) ? "Fizz" :                    // Check if divisible by 3
                   (i % 5 === 0) ? "Buzz" :                    // Check if divisible by 5
                    i;                                         // Otherwise, just print the number
  
    console.log(output); // Allons-y !!
}



// Boring Solution Below

// for (let i = 1; i <= 100; i++) {
//   // Check if the number is divisible by both 3 and 5 (i.e., by 15)
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } 
//   // Check if the number is divisible by 3
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   } 
//   // Check if the number is divisible by 5 (but not 3)
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   } 
//   // If it's not divisible by 3 or 5, just show the number
//   else {
//     console.log(i);
//   }
// }