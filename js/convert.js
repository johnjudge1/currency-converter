//Setting up labels
	
//Pounds
function euroToPounds() {
   //Adding the amounts
    var amount = parseInt(document.getElementById("value1").value);
	
	//Adding the currency conversion rate
	var pounds = amount * 0.86;
	
	//Adding a message
	var message = amount + ' euros converts to ' + pounds + ' sterling.';
    console.log(message);
    document.getElementById("resultsentence").innerHTML = message;
	
}
	
//Dollars
function euroToDollars() {
	
	var amount = parseInt(document.getElementById("value2").value);
	
	var dollars = amount * 1.06;
	
	var message = amount + ' euros converts to ' + dollars + ' dollars.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	
}
	
//Yen
function euroToJapaneseYen() {
	
	var amount = parseInt(document.getElementById("value3").value);
	
	var japaneseYen = amount * 121.12;
	
	var message = amount + ' euros converts to ' + japaneseYen + ' yen.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	
}
	
//Bitcoin
function euroToBitcoin() {
	
	var amount = parseInt(document.getElementById("value4").value);
	
	var bitcoin = amount * 0.00082;
	
	var message = amount + ' euros converts to ' + bitcoin + ' bitcoin.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

}

alert = "No Value Entered"