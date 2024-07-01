function isSameType(value1, value2) {
  //your js code here
	return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
if (!isNaN(value1)) {
  value1 = parseFloat(value1); // Convert to float to handle decimals
}
if (!isNaN(value2)) {
  value2 = parseFloat(value2); // Convert to float to handle decimals
}
alert(isSameType(value1, value2));


