// Craig Schultz
// Date:  April 20, 2013
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
			case "on":
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
			var linksLi = document.createElement('li');
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
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}		
		
	}
	
	// creates edit and delete links for each pet entry.
	function makeItemLinks(key, linksLi){
		//add the edit single entry link
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit this pet";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML=editText;
		linksLi.appendChild(editLink);
		
		// add line break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		//add the single pet entry delete link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Pet";
		//deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
		
		
	}
	
	function editItem(){
		// Get the data for pet from localStorage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		//show the form
		toggleControls("on");
		//populate form fields
		$('captureDate').value = item.date[1];
		$('family').value = item.family[1];
		$('name').value = item.name[1];
		$('level').value = item.level[1];
		$('quality').value = item.qual[1];
		if(item.fav[1] == "yes"){
			$('favorite').setAttribute("checked", "checked");
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




