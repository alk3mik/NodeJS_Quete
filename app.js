'use strict';

// The Date() function creates the date in the following format 2017-05-18T22:46:02.002Z .
// The method getTime() converts it into the milliseconds elapsed from the year 1970.
var currYearMS = new Date().getTime();

// This is the conversion factor from year to milliseconds.
const y2ms = 31556952000;

// Therefore we define also the offset:
const offset = 1970;

var birthYear;

process.stdin.resume();
process.stdin.setEncoding('utf8'); 
console.log('How old are you?');
   
process.stdin.on('data', function(age) {

	if (isNaN(age)) {
		
		console.log('Age value not valid. Please enter a numeric value.');
	
	} else if (age > 99) {
	
		console.log('Age value exceeds the upper limit. Please enter a number less than 99 .')
	
	} else {
	
		birthYear = Math.floor((currYearMS - age * y2ms) / y2ms) + offset;
    	console.log('You were born in ' + birthYear);
    	process.exit();
    
    }

});