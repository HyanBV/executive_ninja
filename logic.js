//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //
//                                              LOGIC                                            //


// Exercise 1. User Profile
// Function to prompt user for data and display such info
function gatherUserData() {
    // Prompting for user data
    const username = prompt("Enter your username:");
    const age = prompt("Enter your age:");
    const favoriteMovies = prompt("Enter your favorite movies separated by commas:").split(',');
  
    // Displaying the collected information
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    
    // Displaying favorite movies with a message
    favoriteMovies.forEach(movie => {
        // Trimming whitespace and creating a message for each movie
        const trimmedMovie = movie.trim();
        console.log(`The film ${trimmedMovie} is one of my favorites.`);
    });
}
  
// Allons-y !!
console.log("Exercise 1. User Profile.");
gatherUserData();




// Exercise 2. Highest Number
//
function findHighestNumber() {
  let highest = -Infinity; // Initialize the highest number to the smallest possible value

  // Loop to ask for 10 numbers
  for (let i = 1; i <= 10; i++) {
    const userInput = prompt(`Enter number ${i}:`); // Prompt user for a number
    const number = Number(userInput); // Convert input to a number

    // Check if the input is a valid number and update highest if necessary
    if (!isNaN(number) && number > highest) {
      highest = number; // Update highest if current number is greater
    }
  }

  // Output the highest number
  console.log(`The highest number is: ${highest}`);
}

// Allons-y !!
console.log("Exercise 2. Highest Number.");
findHighestNumber();




// Exercise 3. Alarm
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //
//                       TBD - SOON                            //






// Exercise 4. Palindrome
// First Proposal (With a regular expression).
function isPalindrome() {
  // Prompt the user for a word or sentence
  const input = prompt("Enter a word or sentence:");

  // Normalize the input: remove spaces, punctuation, and convert to lowercase
  const cleanedInput = input
    // Cheating expression buildup? ...
    // /.../ --> Regular JS Expression.
    // [...] --> Class Definition.
    // \W --> Special meaning: Matches any character that is not alphanumeric or an underscore.
    // _ --> Ensures underscores are removed from the string.
    // g --> A flag )global search) that will look for occurrences of the non-word characters in the whole input string.
    // Cheating expression buildup explanation ends here...
    //
    .replace(/[\W_]/g, '') // Remove all non-word characters (punctuation and spaces)
    .toLowerCase();       // Convert to lowercase

  // Reverse the cleaned input
  const reversedInput = cleanedInput.split('').reverse().join('');

  // Check if the cleaned input is equal to its reversed version and output result using a ternary operator (for funsies)
  const result = (cleanedInput === reversedInput) 
    ? `${input} is a palindrome.` 
    : `${input} is not a palindrome.`;

  console.log(result); // Print the result
}

// Allons-y !!
console.log("Exercise 4. Palindrome (First Proposal).");
isPalindrome();


// Second Proposal
function isPalindrome2() {
  // Prompt the user for a word or sentence
  const input = prompt("Enter a word or sentence:");

  // Initialize an empty string to store the cleaned input
  let cleanedInput = '';

  // Iterate through each character in the input
  for (let char of input) {
    // Check if the character is alphanumeric (letters and digits)
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanedInput += char.toLowerCase(); // Convert to lowercase and add to cleanedInput
    }
  }

  // Reverse the cleaned input
  const reversedInput = cleanedInput.split('').reverse().join('');

  // Check if the cleaned input is equal to its reversed version and output result
  const result = (cleanedInput === reversedInput)
    ? `${input} is a palindrome.`
    : `${input} is not a palindrome.`;

  console.log(result); // Print the result
}

// Allons-y !!
console.log("Exercise 4. Palindrome (Second Proposal).");
isPalindrome2();