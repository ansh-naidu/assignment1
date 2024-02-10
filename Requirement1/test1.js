// test1.js

// Importing the function individually
import isLeapYear from './dateUtil.js';

// Testing one leap year and one non-leap year
console.log("2024 is a leap year:", isLeapYear(2024)); // should return true
console.log("2023 is a leap year:", isLeapYear(2023)); // should return false
