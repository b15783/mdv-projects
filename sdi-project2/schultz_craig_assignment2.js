// Craig A. Schultz
// Date:  March 10, 2013
// Project 2
// SDI 1303

alert("Dont forget to open you console so you can see the output");

// --VARIABLES--

// PROCEDURE

var dayOrNight = function(){
	var currentHour = (new Date()).getHours(), timeOfDay;
	if (7 < currentHour < 19) {timeOfDay = "bright"; }
	else {timeOfDay = "dark"; }
	
	console.log("You wake up, and the first thing you realize is that is " + timeOfDay + 
	" all around you!");
};

// BOOLEAN FUNCTION

// NUMBER FUNCTION
 
// STRING FUNCTION

// ARRAY FUNCTION

// MAIN SECTION

dayOrNight();