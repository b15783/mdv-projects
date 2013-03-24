// Craig A. Schultz
// Date:  March 23, 2013
// Project 4
// SDI 1303


// Problem 1
// Does a string follow a 123-456-7890 pattern like a phone number?

//  MAKEUP: This is where I lost points before, in PROJECT 3.  I did not declare global 
//  variables and functions at the beginning, and putting the main code, function calls, 
//  and console logs at the bottom.  The script below is formatted better.

var phone = "123-456-7890";
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

var emailAddress = "ki4npz@fullsail.edu";
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
//Title-case a string

var myString = "crAig schuLTz";
function splitStringCaseMod(myString){
	var splitPoint = myString.indexOf(" "),
		firstWord = myString.substr(0, splitPoint),
		secondWord = myString.substr(splitPoint+1),
		firstWordRemainder = firstWord.substring(1).toLowerCase();
		secondWordRemainder = secondWord.substring(1).toLowerCase();
		firstWordModded = firstWord[0].toUpperCase() + firstWordRemainder;
		secondWordModded = secondWord[0].toUpperCase() + secondWordRemainder;
		result = firstWordModded + " " + secondWordModded
	return result;
}

console.log("Problem 4:");
casedWords = splitStringCaseMod(myString);
console.log(casedWords);
//End of Problem 4

//Problem 5
//Given a string that is a list...return a list with the separator changed....

var stringToMod = "a,b,c,d";
function changeSeparator(stringToModify, firstSep, secondSep){
	//var moddedString = stringToModify.replaceAll(firstSep, secondSep);
	var str_hasil = "";
	var temp;
	for (i = 0; i < stringToModify.length; i++){
		if (stringToModify[i] == firstSep){
			temp = secondSep;
		}
		else{
			temp = stringToModify[i];
		}
		str_hasil += temp;
	}
	return str_hasil;
};

console.log("Problem 5:")

var modString = changeSeparator(stringToMod, ",", "/");
console.log(modString);
//End of Problem 5

//Problem 6
//Format a number to use a specific number of decimal places as for money

var number = 4.5644;
function setDecimals(number){
	var newNumber = number.toFixed(2);
	return newNumber;
};

console.log("Problem 6:");
fixedNumber = setDecimals(number);
console.log(fixedNumber);
//End of Problem 6

//Problem 7
//Fuzzy-match a number: is the number above or below a number within a certain percent?

var result = "",
	order = "",
	analysis = "",
	firstNumber = 5,
	secondNumber = 10,
	percentage = 50;
function matchNumber(firstNum, secondNum, thirdNum){
	if (firstNum < secondNum){
		order = firstNum + " is below " + secondNum + " ";
	}
	else if (firstNum > secondNum){
		order = firstNum + " is above " + secondNum + " ";
	}
	else {
		return console.log(firstNum + " is equal to " + secondNum);
	}
	var scope = secondNum*percentage/100,
		upperLimit = secondNum + scope,
		lowerLimit = secondNum - scope;
	if (lowerLimit <= firstNum && firstNum <= upperLimit){
		result = "and within " + percentage + " percent of " + secondNum;
	}
	else {
		result = "and not within " + percentage + " percent of " + secondNum;
	}
	analysis = order + " " + result;
	return analysis;
};
console.log("Problem 7:");
var matchResults = matchNumber(firstNumber, secondNumber, percentage); 
console.log(matchResults);
//End of Problem 7

//Problem 8
// Find the number of hours of days difference between two dates.

var day1 = new Date("April 1, 2013"),
	day2 = new Date("April 18, 2013"),
	difference,
	hoursOrDays = "days";
	
function getDateDifference(fromDate, toDate, interval){
	difference = toDate.getDate() - fromDate.getDate();
	if (interval === "hours"){
		difference = difference * 24;
	}
	return difference;

};
console.log("Problem 8:");
results = getDateDifference(day1, day2, hoursOrDays);
console.log(results);

//alert("JavaScript works!");