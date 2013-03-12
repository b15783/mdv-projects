// Craig A. Schultz
// Date:  March 10, 2013
// Project 2
// SDI 1303
// Waking up an a deserted island

alert("Dont forget to open you console so you can see the output");

// --VARIABLES--

var name = "Jack",
	hungerLevel = 10

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

var getFood = function(count){
	var bananas = count;
	while (count > 0) {
		console.log("Picked up a banana.");
		count--;
		};
	return(bananas / 5);
}; 
 
// STRING FUNCTION

var sortBananas = function(color,taste){
	var bananaSummary = ("The " + color + " bananas taste " + taste + "!");
	console.log(bananaSummary);
};	

// ARRAY FUNCTION

// MAIN SECTION

getDayOrNight();

var hotOrCold = isHeCold(true, true);
	console.log("The next thing that you realize is that you are " + hotOrCold + ".");
	
console.log("You suddenly realize that you are on an unfamiliar island and you wonder how you got there");
console.log("You think to start gathering food.  After looking around, you see lots of bananas on the ground.");

var foodAmount = getFood(hungerLevel);
	
console.log(foodAmount + " bunches of bananas should be enough for now!");
console.log("After eating some bananas, you realize there are some different kinds.");

sortBananas("yellow", "sweet");
sortBananas("green", "salty");
sortBananas("black", "bitter");






	
	