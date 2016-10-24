// calculator.js

var multiplicationPattern = /(\d+)(\*)(\d+)/,
divisionPattern = /(\d+)(\/)(\d+)/,
additionPattern = /(\d+)(\+)(\d+)/,
subtractionPattern = /(\d+)(\-)(\d+)/,

sum = function (a, b) {
	return a + b;
},

difference = function (a, b) {
	return a - b;
},

product = function (a, b) {
	if (isNaN(a)) {
		a = Number(a);
	}
	if (isNaN(b)) {
		b = Number(b);
	}
	return a * b;
},

quotient = function (a, b) {
	return a / b;
},

hasMultiplication = function (string) {
	return (string.match(/\*/g) || []).length;
};

var stdin = process.openStdin();
console.log('Calculator. Enter equation to calculate: (ie. 1 + 1)')
stdin.addListener("data", function(input) {
	var result = null,
		equation = input.
			toString().
			replace(/\s/g,'').
			trim();

	//Check for multiplication
	if (hasMultiplication(equation)) {
		// For each match, multiply and replace in the equation
		for (var i = 0; i <= hasMultiplication(equation); i++ ) {
			var multiplication = equation.match(multiplicationPattern),
			result = product(multiplication[1], multiplication[3]),
			equation = equation.replace(multiplicationPattern, result);
		}
	}

	// repeat similar pattern for division, addition and subtraction
	//Check for division...
	// Find number of matches for division...

	//Check for addition...
	// Find number of matches for addition...


    console.log(equation);
 });