"use strict";
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name
//  in lowercase, uppercase, and titlecase.
let personName = "Muhammad Usman khokhar";
console.log(personName.toLowerCase()); // Converts the whole string to lowercase
console.log(personName.toUpperCase()); // Converts the whole string to uppercase
// Capitalizes the first character of the string and converts the rest to lowercase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
