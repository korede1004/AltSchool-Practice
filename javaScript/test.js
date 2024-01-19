// Tenary Operator
// let age = 43
// let canVote = (age > 18) ? true: false
// console.log(canVote) 
// this is the same as the if statement, declaring a variable and assigning it a value based on a condition. age is greater than 18 so

let age = 3;
if (age > 18) {
    console.log ('You can vote');
}else{
    console.log ("You are not eligible to vote");
    console.log ("Go home and watch cartoons");
}

// Exercises
// Write a program that determines whether a given number is positive or negative.

let num = 8;
if (num > 0){
    console.log("Positive")
}else{
    console.log("Negative")
}

// Write a program that checks if a number is even or odd.

let number = 8
if (number %2 === 0){
    console.log("It is an even number")
}else{
    console.log("It is an odd number")
}

// Write a program that determines if a year is a leap year

let year = 366
if (year === 365){
    console.log("This is not a leap year")
}else if (year === 366){
    console.log("This is a leap year")
}