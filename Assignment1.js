// Task 1: Declare and Initialize Variables
var name = "Harsh Jagtap"; 
var age = 22; 
var isStudent = true; 


// Task 2: Basic Arithmetic Operations

const num1 = 10;
const num2 = 20;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

// Task 3: Concatenation

let firstName = "Harsh";
let lastName = "Jagtap";
let Occupation = "Trainee Software Engineer";

let fullName = firstName + " " + lastName;
let bio = "My name is " + fullName + ". I am a " + Occupation + ". I am working at Harbinger Systems.";

console.log(fullName);
console.log(bio);

// Task 4: Displaying Output


//  Displaying Task 1

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

// Displaying Task 2

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
console.log(`The difference when ${num1} is subtracted from ${num2} is: ${difference}`);
console.log(`The product of ${num1} and ${num2} is: ${product}`);
console.log(`The quotient when ${num1} is divided by ${num2} is: ${quotient}`);

// Displaying Task 3

console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("Occupation: "+Occupation);
console.log("Full Name: "+fullName);
console.log("Bio: "+bio);

// Bonus Task

let birthYear = 2003;
let currentYear = 2025;

let calculatedAge = currentYear - birthYear;

console.log("Calculated Age: " + calculatedAge);