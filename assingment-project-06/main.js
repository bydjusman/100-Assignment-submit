"use strict";
// Question 06 Stripping Names: Store a person’s name, and include some whitespace characters
// at the beginning and end of the name. Make sure you use each character combination,
//  "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//  Then print the name after striping the white spaces
let NameWithWhiteSpace = "\t \n Usman Khokhar \t \n";
console.log("Name With White Space", NameWithWhiteSpace);
let strippedName = NameWithWhiteSpace.trim();
console.log("striped Name:", strippedName);
