

function doClickSubmit() {
	alert("You clicked this!");
}

function showAlert() {
	alert("This showed an alert");
}

function showConfirm() {
	if ( confirm("Would you like me to display an alert box?") ) {
		showAlert();
	}
	else {
		console.log("They did not want me to display an alert box :-(");
	}
}

function showPrompt() {
	var data = prompt("Please enter some data", "...");
	showAnotherAlert(data);
}

function showAnotherAlert(displayThis) {
	alert(displayThis);
}

function runForLoop() {
	for ( var i=0;i<10;i++ ) {
		console.log("For loop i=" + i);
	}
}

/*
	This one type of a comment. 
	A multi-line comment.
*/
function runSwitchStatement(color) {
	switch(color) {
		case "red":
			alert("Red is a good color");
			break;
		case "green":
			alert("Green is a good color");
			break;
		case "blue":
			alert("Blue is a good color");
			break;
		case "yellow":
			alert("Yellow is a good color");
			break;
		case "purple":
			alert("I didn't say use purple!");
			break;
		default:
			alert("Not sure what color that is.");
			break;
	}
}

// This is another type. A single line comment.

function runWhileLoop() {
	var z = 10;
	while ( z > 0 ) {
		var prt = "Before decrement z=" + z;
		z--;
		prt += "  After decrement z=" + z;
		console.log(prt);
	}
}

function showLengthOfString(str) {
	alert("The length of '" + str + "' is " + str.length);
}
