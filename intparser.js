function IntParser(str) {
  // Create an object that maps spelled out numbers to their integer values
  const numMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  // Split the input string into an array of words
  const words = str.split(/\s|-/);

  // Initialize a variable to store the final result
  let result = 0;

  // Initialize a variable to store the current value being processed
  let currentVal = 0;

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // Get the current word and its integer value
    const word = words[i];
    const val = numMap[word];

    // If the word is "hundred," "thousand," "million," or "billion,"
    // multiply the current value by the appropriate factor and add it
    // to the final result
    if(word === "and"){
       
       }
    else if (word === "hundred") {
      currentVal *= val;
    } else if (word === "thousand") {
      result += currentVal * val;
      currentVal = 0;
    } else if (word === "million") {
      result += currentVal * val;
      currentVal = 0;
    }  else {
      // Otherwise, add the value to the current value
      currentVal += val;
    }
  }
  // Add the final current value to the result
  result += currentVal;
  // Return the result
  return result;
}

console.log(IntParser("one hundred eighteen thousand four hundred and three"));
