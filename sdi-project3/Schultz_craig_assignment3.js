// Craig A. Schultz
// Date:  March 20, 2013
// Project 3
// SDI 1303
// Waking up an a deserted island

alert("Dont forget to open you console so you can see the output");

// Global variables

var banana = {
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

console.log("The stranger asks you how the bananas taste.");
banana.summary();

console.log("After searching for casualties, you find the following ones:");
var reportCasualties = function(json) {
	for (var i = 0; i < json.casualties.length; i++){
		var casualty = json.casualties[i];
		console.log(casualty.name + "is a casualty.  He was " + casualty.age);
	};
};

reportCasualties(json);