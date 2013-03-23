// Craig A. Schultz
// Date:  March 23, 2013
// Project 4
// SDI 1303


// Problem 1
// Does a string follow a 123-456-7890 pattern like a phone number?

//  MAKEUP: This is where I lost points before, in PROJECT 3.  I did not declare global 
//  variables and functions at the beginning, and putting the main code, function calls, 
//  and console logs at the bottom.  The script below is formatted better.


function verifyPhone(phoneNumber){
	var validPhone = true,
		dashes = 0,
		firstDash = phoneNumber.indexOf("-"),
		lastDash = phoneNumber.lastIndexOf("-"),
		areaCode = phoneNumber.substr(0, firstDash),
		prefix = phoneNumber.substr(firstDash + 1, 3),
		lastFourDigits = phoneNumber.substr(lastDash + 1)
	;
	// Checks to make sure there is more than one dash in the number
	if (firstDash === lastDash) {
		validPhone = false;
	}
	
	// Checks to make sure the dashes are at the correct positions
	if (firstDash < 3 || firstDash > 3 || lastDash < 7 || lastDash > 7){
		validPhone = false;
	}
	
	//Finds last four
	if (lastFourDigits === "undefined" || lastFourDigits === null || lastFourDigits === ""){
		validPhone = false;
	}
	
	//Checks length of last 4 digits
	if (lastFourDigits.length != 4){
		validPhone = false;
	}
	
	//Finds area code
	if (areaCode === "undefined" || areaCode === null || areaCode === ""){
		validPhone = false;
	}
	
	// Checks area code length
	if (areaCode.length != 3){
		validPhone = false;
	}
	
	//Finds prefix
	if (prefix === "undefined" || prefix === null || prefix === ""){
		validPhone = false;
	}
	
	// Checks prefix length
	if (prefix.length != 3){
		validPhone = false;
	}
	
	if (phoneNumber.length != 12){
		validPhone = false;
	};
	if (validPhone != null || validPhone != "" && typeof validPhone === "boolean"){
	//*returns Boolean*
		return validPhone;
		
	}
		else{
			return console.log("An error has occurred!");
			
		}
	
};

console.log("Problem 1:");
phone = "123-456-7890";
verified = verifyPhone(phone);
if (verified){
	console.log("The phone number " + phone + " follows the correct pattern!");
}
	else{
		console.log("The phone number " + phone + " does not follow the correct pattern.");
	}
// End of Problem 1
	
// Problem 2
// Does a string follow an aaa@bbb.ccc pattern like an email address?

function checkValidEmail(email){

	var validEmail = true,
		atSign = email.indexOf("@"),
		dot = email.indexOf(".");
//  MAKEUP: --  In Project 1, I lost points for using the assignment operator (=) in my 
//  conditionals.  Below is the proper use of conditional evaluations.		
	if (atSign === -1){
		validEmail = false;
		console.log(validEmail);
	}
	if (dot === -1){
		validEmail = false;
		console.log(validEmail);
	}
	if (atSign > dot){
		validEmail = false;
		console.log(validEmail);
	}
	if (atSign === 0){
		validEmail = false;
		console.log(validEmail);
	}
	if (dot === email.length){
		validEmail = false;
		console.log(validEmail);
	}
	if (validEmail != null || validEmail != "" && typeof validEmail === "boolean"){
	//*returns Boolean*
		return validEmail;
		
	}
		else{
			return console.log("An error has occurred!");
			
		}
};

console.log("Problem 2:");
emailAddress = "ki4npz@fullsail.edu";
valid = checkValidEmail(emailAddress);
if (valid){
	console.log("The email address " + emailAddress + " is formatted correctly.");
}
else{
	console.log("The email address " + emailAddress + " is NOT formatted correctly.");
}
//End of Problem 2

//Problem 3
//Is the string a URL

function checkURL(address){
	var satisfactory = false,
		size = address.indexOf(":"),
		protocol = address.substr(0, size);
		
		if (protocol === "http"){
			satisfactory = true;
		}
		else if (protocol ==="https"){
			satisfactory = true;
		}
		return satisfactory;
}

console.log("Problem 3:");
address = "https://www.fullsail.edu/";
sat = checkURL(address);
if (sat){
	console.log("The web address " + address + " is valid.");
}
else{
	console.log("The address " + address + " is not a valid web address.");
}
//End of Problem 3

//Problem 4
//
//alert("JavaScript works!");