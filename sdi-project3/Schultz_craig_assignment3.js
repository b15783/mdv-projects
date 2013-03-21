// Craig A. Schultz
// Date:  March 20, 2013
// Project 3
// SDI 1303
// Waking up an a deserted island

alert("Dont forget to open you console so you can see the output");

// Global variables

var mainChar = {
	generous: true,
	giveFood: function(result){
		if (mainChar.generous === true){
			result = "Sure, you my have some of my bananas.";
			//give some bananas
		}
		else {
			result = "No, you no take bananas!";
		}
		return result;
	}
},
	banana = {
	color: [
		"yellow",
		"green",
		"black"
	],
	taste: [
		"sweet",
		"salty",
		"bitter"
	],
	summary: function(){
		for (var i = 0; i < banana.color.length; i++){
			console.log("The " + banana.color[i] + " bananas taste " + banana.taste[i] + ".");
		};
	}
};
console.log("Today, you meet another survivor who is stranded on the island with you.");
console.log("The stranger asks you how the bananas taste.");
banana.summary();
console.log("The stranger says, 'I'm very hungry, may I have a banana?");
var foodReply = mainChar.giveFood();
console.log(foodReply);
console.log("I wonder if we are the only survivors on the island, lets see if we can find some others.");
console.log("After searching for casualties, you find the following ones:");
var reportCasualties = function(json) {
	for (var i = 0; i < json.casualties.length; i++){
		var casualty = json.casualties[i];
		console.log(casualty.name + " is a casualty.  He was " + casualty.age);
	};
};

reportCasualties(json);