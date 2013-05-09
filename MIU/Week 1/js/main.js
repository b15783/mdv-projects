// Craig Schultz
// Date:  May 7, 2013
// Week 1
// MiU 1305

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
	function saveData(key){
		// If there is no key, that means its a new item and a key is needed
		if(!key){
			var id			= Math.floor(Math.random()*100000001);
		}else{
			// Set the id to the existing key we're editing so that it will save over
			id = key;
		}
		
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
	
	function autoFillExamplePets(){
		//The JSON data used below is located in JSON.js
		//Store JSON data into local storage
		for(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}
	
	function getData(){
		toggleControls("off");
		if(localStorage.length === 0){
			alert("No pets have been added, example pets are loaded by default.");
			autoFillExamplePets();	
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
			getImage(obj.family[1], makeSubList);
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
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
		
		
	}
	
	function getImage(famName, makeSubList){
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ famName +".png");
		imageLi.appendChild(newImg);
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
		
		// Remove initial listener from input 'save' button.
		savePet.removeEventListener("click", saveData);
		// Change the save button value to edit button
		//***Note*** the instructions for the assignment said to make the button say 
		//  "edit", but after testing my application, "edit" didnt seem appropriate, in 
		//  i think "edit" would be confusing to a user.  I think that using the label
		//  "save" makes a little more sense and would be more obvious to a user. so, 
		// instead of labelling my button with "edit" I used "save" below.
		$('addPetButton').value = "Save";
		var editSubmit = $('addPetButton');
		// Save the key value established in this function as a property of the editSubmit
		// event so we can use that value when we save the data we edited.
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this pet?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Pet was removed.");
			window.location.reload();
		}else{
			alert("Pet was NOT deleted.")
		}
	}
	
	function clearLocalStorage(){
		if(localStorage.length === 0){
			alert("There are not pets to clear.");
		}else{
			var ask = confirm("Are you sure you want to DELETE ALL your pets??");
			if(ask){
				localStorage.clear();
				alert("All pets are cleared");
				window.location.reload();
				return false;
			}else{
				alert("Pets were not deleted.")
			}	
		}	
	}
	
	function validate(e){
		// Define the elements that we want to check
		var getDate = $('captureDate');
			getName = $('name');
			getFamily = $('family');
			
		// Reset Error Messages
		errMsg.innerHTML = "";
		getFamily.style.border = "1px solid black";
		getName.style.border = "1px solid black";
		getDate.style.border = "1px solid black";			
				
		// Get error messages
		var messageAry = [];
		// Family validation
		if(getFamily.value == "--Choose a family--"){
			var familyError = "Please choose a family";
			getFamily.style.border = "1px solid red";
			messageAry.push(familyError);
		}
		
		// Name vaildation
		if(getName.value === ""){
			var nameError = "Please enter a name for your pet.";
			getName.style.border = "1px solid red";
			messageAry.push(nameError);
		}
		
		// Date validation
		if(getDate.value === ""){
			var dateError = "Please enter a date.";
			getDate.style.border = "1px solid red";
			messageAry.push(dateError);
		}
		
		// If errors, display on screen
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i<j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
			saveData(this.key);
		}
		
	}
	
	var familyGroup = ["--Choose a family--", "Aquatic", "Beast", "Critter", "Dragonkin", "Elemental", "Flying", "Humanoid", "Magic", "Mechanical",
			"Undead"],
		favoriteValue="no",
		errMsg = $('errors');
	
	makeFamilyGroup();
		
	var showPets = $('showPetButton');
	showPets.addEventListener("click", getData);
	var clearData = $('clearPets');
	clearData.addEventListener("click", clearLocalStorage);
	var savePet = $('addPetButton');
	savePet.addEventListener("click", validate);
	

});




