// test2.js

// Importing the module as a variable
import dateUtil from './dateUtil.js';

// Testing one leap year and one non-leap year using the imported module variable
console.log("2024 is a leap year:", dateUtil(2024)); // should return true
console.log("2023 is a leap year:", dateUtil(2023)); // should return false