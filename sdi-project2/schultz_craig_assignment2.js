// Craig A. Schultz
// Date:  March 10, 2013
// Project 2
// SDI 1303
// Waking up an a deserted island

alert("Dont forget to open you console so you can see the output");

// --VARIABLES--



;


// PROCEDURE

var getDayOrNight = function(){
	var currentHour = (new Date()).getHours(), timeOfDay;
	if (7 < currentHour < 19) {timeOfDay = "bright"; }
	else {timeOfDay = "dark"; }
	
	console.log("You wake up, and the first thing you realize is that is " + timeOfDay + 
	" all around you!");
};

// BOOLEAN FUNCTION

var isHeCold = function(shoes, shirt){
	if (shoes || shirt){
		return("warm");}
	else {return("freezing");}
};	

// NUMBER FUNCTION
 
 
// STRING FUNCTION

// ARRAY FUNCTION

// MAIN SECTION

getDayOrNight();

var hotOrCold = isHeCold(true, true);
	console.log("The next thing that you realize is that you are " + hotOrCold + ".");
	
//console.log("The next thing that you realize is that there are dead bodies all around you!");

	
	