// Craig Schultz
// Date:  April 13, 2013
// Project 2
// VFW 1304

window.addEventListener("DOMContentLoaded", function(){

	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function makeFamilyGroup(){
		var formTag = document.getElementsByTagName("form"), 
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "family");
		for(var i=0, j=familyGroup.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = familyGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	
	}
	var familyGroup = ["--Choose a family--", "Aquatic", "Beast", "Critter", "Dragonkin", "Elemental", "Flying", "Humanoid", "Magic", "Mechanical", "Undead"];
	makeFamilyGroup();
	
	
	
	//var showPets = $('showPetButton');
	//showPets.addEventListener("click", getData);
	//var clearData = $();
	//clearData.addEvenListener("click", clearLocal);
	//var savePet = $('addPetButton');
	//savePet.addEventListener("click", saveData);
	

});




/*var addButton = document.getElementById("addPetButton");
var showButton = document.getElementById("showPetButton");
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
var form = document.getElementById("inputForm");
var pet = {};
var myList = document.createElement("ul");

var captureData = function(){
	localStorage.setItem("Date Acquired", captureDate.value);
	localStorage.setItem("Family", family.value);
	localStorage.setItem("Pet Level", level.value);
	localStorage.setItem("Pet Quality", quality.value);
	localStorage.setItem("Favorite", favorite.value);
	localStorage.setItem("id", idEntry.value);
	localStorage.setItem("Pet Name", name.value);
	
	//alert("Pet was added to list");
};

var addPet = function(){
	var ask = confirm("Add this pet to your list?");
	if(ask){
		captureData();
	}
	else{
		alert("Pet was not added.");
	}
};

var showPets = function(){
	document.getElementById("mainContent").setAttribute("style", "display:none");
	var petEntry = document.createElement("li");
	petEntry.innerHTML = 
};

addButton.addEventListener("click", addPet);
//showButton.addEventListener("click", showPets);

*/
