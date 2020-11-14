function add (a,b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((total, item) => total + item, 0);
}

function multiply (arr) {
	return arr.reduce((total, item) => total * item, 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(num) {
	if (num == 0 || num == 1)  {
		return 1;
	} else {
		let count = 1;
		let result = 1;
		while (count <= num) {
			result *= count;
			count += 1;
		}
		return result;		
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}