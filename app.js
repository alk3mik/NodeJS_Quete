'use strict';

const currYear = new Date();
// console.log(currYear);
const currYearMS = currYear.getTime();
// console.log(currYear, currYearMS);
var birthYear;
const y2ms = 22896000000;

process.stdin.resume();
process.stdin.setEncoding('utf8'); 
console.log('How old are you?');
   
process.stdin.on('data', function(age) {
	birthYear = (currYearMS - age * y2ms) / y2ms;
    console.log('You were born in ' + birthYear);
    process.exit();
});
