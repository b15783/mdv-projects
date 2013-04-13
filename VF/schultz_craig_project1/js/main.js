// Craig Schultz
// Date:  April 13, 2013
// Project 2
// VFW 1304

var addButton = document.getElementById("addPetButton");
var petList = document.createElement("ul");
var petListBullet = document.createElement("li");
var myDiv = document.getElementById("mainContent");
var captureDate = document.getElementById("captureDate");
var family = document.getElementById("family");
var name = document.getElementById("name");
var level = document.getElementById("level");
var quality = document.getElementById("quality");
var favorite = document.getElementById("favorite");
var idEntry = document.getElementById("id_entry");

var captureData = function(){
	//localStorage.setItem("Date Acquired", captureDate.value);
	//localStorage.setItem("Family", family.value);
	//localStorage.setItem("Pet Level", level.value);
	//localStorage.setItem("Pet Quality", quality.value);
	//localStorage.setItem("Favorite", favorite.value);
	//localStorage.setItem("id", idEntry.value);
	localStorage.setItem("Pet Name", name.value);
	
	alert("Pet was added to list");
};

var addPet = function(){
	var ask = confirm("Add this pet to your list?");
	if(ask){
		captureData()
	}
	else{
		alert("Pet was not added.");
	}
};

//myDiv.appendChild(petList);
addButton.addEventListener("click", addPet);


