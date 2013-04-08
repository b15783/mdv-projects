// Craig A. Schultz
// Date:  March 20, 2013
// Project 3
// SDI 1303
// Waking up an a deserted island

var json = {
	"casualties": [
		{
			"name": "Larry",
			"age": 30,
			"buried": false
		},
		{
			"name": "Curly",
			"age": 33,
			"buried": false
		},
		{
			"name": "Moe",
			"age": 26,
			"buried": false
		}
	]

};

var buryBody = function(body){
	json.casualties[body].buried = true;
	console.log(json.casualties[body].name + " is buried.   (" + json.casualties[body].buried + ")");
	
};

