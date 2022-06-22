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

// Pseudo code: Created a function that takes a temp as a parameter than created an if check to see if the temperature is above or below 212. Also google is my best friend so all these questions may not be exactly how we were taught 😬.

// Declare a function boiling.
// Set parameter of temp.
// Declare variable for boiling.
// conditional statements to compare parameter to variable.
// Return outputs depending on cconditionals using string interpolation 

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingTemp = (temp) =>{
    if(temp > 212){
        return temp = "Above boiling"
    }else if(temp === 212 ){
        return temp = "Boiling point"
    }else{
        return temp = "Below boiling "
    }
}

console.log(boilingTemp(temp))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: Created function
// Merged arrays
// output = 10
// Create variable that will store combined variables 
// console.log new array.length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const mergedArray = [...myNumbers1, ...myNumbers2 ]
console.log(mergedArray.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: This was an absolute nightmare for me, see question 4 psuedo, please be easy on me haha. The code does work though!


const currentCohort = "Delta 2022"

let myReverseStr = ""
for (let i = currentCohort.length-1; i >= 0; i--){
    myReverseStr += currentCohort[i]
}
console.log(myReverseStr)



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: Created function evenOrOdd
// Not gonna lie im having real trouble with the psuedo code for some reason, along with comprehending a lot of the JS syntax but im really good at finding the answer and creating the proper outcome, I literally could not tell you how though, I think it will get better with time & with more understanding of things. I have not been in school for over 10 years and never really put an effort in when I was in school so I am still kind of getting in the groove, please go easy on me haha.

const myArray = [13, 34, 5, 10, 27, 42]

const evenOrOdd = (array) => {
    return array.map(value => {
      if(value % 2 === 0) {
        return "even"
      } else if(value % 2 !== 0) {
        return "odd"
      } else {
        return "Ooops, something went wrong"
      }
    })
  }
  console.log(evenOrOdd(myArray))
  


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: See Psuedo for #4.

// Set one:
const number1 = 58
const number2 = 100

// // Set two:
const number3 = 27
const number4 = 24

const subtraction = (num1, num2) =>{
    if(num1 >= num2){
        return num1 - num2
    }else{
        return num2 - num1
    }
}

console.log(subtraction(number1, number2))
console.log(subtraction(number3, number4))

// Disclaimer: I had a tough time with this first assessment so please go easy on me, its gonna take me time to comprehend a lot of the concept we are taught at such a quick rate.