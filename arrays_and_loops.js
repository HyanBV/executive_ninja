//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //
//                                              ARRAYS AND LOOPS                                            //


// Exercise 1. Sum of Resistors in a Series
// 
function sumResistance(resistors) {
    let totalResistance = resistors.reduce((sum, resistor) => sum + Math.abs(resistor), 0);
    return `${totalResistance} ohms`;
}
// Console Usage (Edit as needed to double-check)
console.log("Exercise 1. Sum of Resistors:")
console.log(sumResistance([-1, 5, 6, 3])); // Allons-y !!




// Exercise 2. Number Divided Into Halves
// 
function numDiv(number) {
    // Divide the number by 2 and return the result in an array, with both halves
    let half = number / 2;
    return [half, half];
}
// Console Usage (Edit as needed to double-check)
console.log("Exercise 2. Number Divided Into Havles:")
console.log(numDiv(4)); // Allons-y !!




// Exercise 3. Secret Society
// 
function secretName(members) {
    // Map each name to its first letter, then join them into a single string
    return members.map(name => name[0]).sort().join('');
}
// Console Usage (Edit as needed to double-check)
console.log("Exercise 3. Secret Society.")
console.log(secretName(['Harry', 'Ron', 'Hermione'])); // Allons-y !!




// // Exercise 4. Online Status (Not asked for yet; Queued).
// // 
// function onlineStatus(users) {
//     const totalUsers = users.length;

//     return totalUsers === 0 ? "Nobody is online" :
//            totalUsers === 1 ? `${users[0]} is online` :
//            totalUsers === 2 ? `${users[0]} and ${users[1]} are online` :
//            `${users[0]}, ${users[1]} and ${totalUsers - 2} more online`;
// }
// // Console Usage (Edit as needed to double-check)
// console.log("Exercise 4. Online Status.")
// console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])); // Allons-y !!



// Exercise 5. Array of Multiples.
//
function arrayMultiples(number, length) {
  const multiples = []; // Initialize an empty array to store the multiples

  // Loop from 1 to the specified length
  for (let i = 1; i <= length; i++) {
    multiples.push(number * i); // Calculate the multiple and add it to the array
  }

  return multiples; // Return the array of multiples
}

// Allons-y !!
console.log("Exercise 5. Array of Multiples.");
console.log(arrayMultiples(2, 10));