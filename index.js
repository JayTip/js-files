// my first javascript code!
//console.log('Hello World');
///let name =  'Thembelani';
//console.log(name)
// variable names cannot be reserved keywords
// should be meaningful
// cannot contain a space or hyphen
// cannot start with a number (1name)
// are case-sensitive
//let name = 'Thembelani';
//let lastName = 'Gina';
//let interestRate =0.3;
//interestRate = 1;
//console.log(interestRate);
//let age = 30; // number literal
//let isApproved = true; //Boolean
//let firstName = undefined;
//let selectedColor = null;
//typeof name

// Object with two properties, name and age
//let person = {
 //   name: 'Money',
  //  age: 31
//};
//person.name  = 'Thembelani';
//console.log(person.name)

//let selectedColors = ['red', 'blue']; // Initialise array
//selectedColors[2] = 2 // assigning a value in an array

//console.log(selectedColors.length); // list of items

// name is a parameter
// Thembelani is an argument
// this function is perfoming a task
function greet(name, lastName) {
    console.log('Hello '+ name +' '+ lastName);
}

//this function is Calculating a value
function square(number) {
    return number * number;
}

let number = square(3)

// 2 functions call, we calling log and square
console.log(number)
//greet('Yonela')