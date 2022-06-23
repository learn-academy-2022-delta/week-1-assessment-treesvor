// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 
// Declare a function boilingTemp.
// Set parameter of temp.
// Declare variable for boiling.
// conditional statements to compare parameter to variable.
// Return outputs depending on cconditionals using string interpolation. 

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// const boilingTemp = (temp) =>{
//     if(temp > 212){
//         return temp = "Above boiling"
//     }else if(temp === 212 ){
//         return temp = "Boiling point"
//     }else{
//         return temp = "Below boiling "
//     }
// }

// console.log(boilingTemp(temp))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// Create console.log with both arrays.
// Use .concat to merge both arrays.
// Add .length to output the number of elemements in the array.

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

// console.log(myNumbers1.concat(myNumbers2).length)




// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: 
// Create function called backward.
// Create a return that .splits the main string. 
// In that same return .reverse the string and reconnect the string with .join

// const currentCohort = "Delta 2022"

// let backward = (val) => {
//     return val.split("").reverse().join("")
// }
// console.log(backward(currentCohort))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: 
// Create function evenOrOdd that targets the numbers in an array.
// Create if else statements with a return of even or odd depending on which number you are targeting in the array.
// Catch all incase something goes wrong.

// const myArray = [13, 34, 5, 10, 27, 42]

// const evenOrOdd = (array) => {
//     return array.map(value => {
//       if(value % 2 === 0) {
//         return "even"
//       } else if(value % 2 !== 0) {
//         return "odd"
//       } else {
//         return "Ooops, something went wrong"
//       }
//     })
//   }
//   console.log(evenOrOdd(myArray))



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// Create function called subtraction.
// Create an if statement that takes a number and subtracts the smaller number from the bigger number.
// Create a return that gives you the output of the if statement.
// console.log both statements.


// Set one:
// const number1 = 58
// const number2 = 100

// // // Set two:
// const number3 = 27
// const number4 = 24

// const subtraction = (num1, num2) => {
//     if(num1 >= num2){
//         return num1 - num2
//     }else{
//         return num2 - num1
//     }
// }

// console.log(subtraction(number1, number2))
// console.log(subtraction(number3, number4))

