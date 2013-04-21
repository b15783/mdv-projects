// Craig Schultz
// Date:  April 13, 2013
// Project 3
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
	
	function getCheckboxValue(){
		if($('favorite').checked){
			favoriteValue="yes"
		}else{
			favoriteValue="no"
		}
	}
	function toggleControls(n){
		switch(n){
			case "off":
				$('mainContent').style.display = "none";
				$('addNew').style.display = "inline";				
				break;
			case "off":
				$('mainContent').style.display = "block";
				$('addNew').style.display = "none";	
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	function saveData(){
		var id			= Math.floor(Math.random()*100000001);
		getCheckboxValue();
		var item 		= {};
			item.date	= ["Date:", $('captureDate').value];
			item.family	= ["Family:", $('family').value];
			item.name	= ["Name:", $('name').value];
			item.level	= ["Level:", $('level').value];
			item.qual	= ["Quality:", $('quality').value];
			item.fav	= ["Is a favorite:", favoriteValue];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pet was added to list");
			
	}
	
	function getData(){
		toggleControls("off");
		if(localStorage.length === 0){
			alert("There are no pets");	
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "display";
		for(var i=0, j=localStorage.length; i<j; i++){
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}
		}		
		
	}
	
	function clearLocalStorage(){
		if(localStorage.length === 0){
			alert("There are not pets to clear.");
		}else{
			localStorage.clear();
			alert("All pets are cleared");
			window.location.reload();
			return false;
		}	
	}
	
	var familyGroup = ["--Choose a family--", "Aquatic", "Beast", "Critter", "Dragonkin", "Elemental", "Flying", "Humanoid", "Magic", "Mechanical",
			"Undead"],
		favoriteValue="no";
	
	makeFamilyGroup();
	
	
	
	
	
	var showPets = $('showPetButton');
	showPets.addEventListener("click", getData);
	var clearData = $('clearPets');
	clearData.addEventListener("click", clearLocalStorage);
	var savePet = $('addPetButton');
	savePet.addEventListener("click", saveData);
	

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
