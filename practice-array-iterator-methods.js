// # practice-array-iterator-methods-Kim-H

// Using Arrays | Lesson 5 - Practice: Array Iterator Methods
// Instructions Complete each of the following tasks by writing code to manipulate the provided arrays. Your solution should only use the array methods covered in the lesson: push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(), concat(), slice(), splice(), sort(), and reverse(). Submit the fi nal version of the arrays as specifi ed after each task.

// Task 1: Using forEach()
console.log("***** Task 1: Using forEach() *****");
// 1. Create an array of five of your favorite cities.

let favCities = ["New York", "Madrid", "Burgos", "Philadelphia", "Denia"];
console.log ("Array of Favorite Cities: ", favCities);

// 2. Use forEach( ) to log each city name to the console in uppercase.

favCities.forEach((city) => {
  console.log(city.toUpperCase());
});

// 3. Submit the output format by adding comments to the code.

// Output:
// NEW YORK
// MADRID
// BURGOS
// PHILADELPHIA
// DENIA

// Task 2: Transforming with map()
console.log("***** Task 2: Transforming with map() *****");
// 1. Create an array called numbers with the numbers 1-5.
let numbers = [1, 2, 3, 4, 5];
console.log("Create an array with numbers 1-5: ", numbers);
// 2. Use map( ) to create an array where each number is squared. Call this array squares.

let squares = numbers.map(num => num * num);

// 3. Log the new array.
console.log("This is what you get when you use .map() to square numbers: ", squares);


// 4. Submit the output by adding comments to the code.

// comments of expected output: [1, 4, 9, 16, 25]

// Task 3: Filtering with filter()
console.log("***** Task 3: Filtering with filter() *****");
// 1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 100.

let scores = [85, 42, 90, 74, 30, 100];
console.log("This is an array of scores: ", scores);

// 2. Use filter ( ) to create a new array containing only the scores greater than or equal to 80. Call this array highScores.

let highScores = scores.filter(score => score >= 80);

// 3. Log the new array.

console.log("This is using .filter() to get a new array, highScores, from the original array scores: ", highScores);

// 4. Submit the output by adding comments to the code.

// comments of expected output:  [85, 90, 100]

// Task 4: Finding with find() and findIndex()
console.log("***** Task 4: Finding with find() and findIndex() *****");
// 1. Create an array called favoriteFood that contains a list of your favorite dishes. Try to add 5 or 6 elements.

let favoriteFood = ["pasta", "chocolate", "bacon", "ice cream", "bread", "cheese"];

// 2. Use find() to locate the first food with more than 4 letters.

let favFoodOver4Char = favoriteFood.find(food => food.length > 4);

console.log("use find() to locate first food with more than 4 letters: ", favFoodOver4Char);

// 3. Use findIndex( ) to find the index of that fruit.

let indexFavFoodOver4Char = favoriteFood.findIndex(food => food.length > 4);

console.log("Use findIndex() to find index of that food: ", indexFavFoodOver4Char);
