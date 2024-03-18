/**
 * Given an array of numbers, this function multiplies all the numbers together
 * and returns the result.
 * @param {number[]} x - The array of numbers to multiply.
 * @return {number} The result of multiplying all the numbers together.
 */
function grow(x) {
	// Initialize the result to the first number in the array.
	let result = x[0];

	// Loop through the rest of the numbers in the array.
	for (let i = 1; i < x.length; i++) {
		// Multiply the current number with the result.
		result *= x[i];
	}

	// Return the final result.
	return result;

	// implementation using Array.prototype.reduce.
	// return x.reduce((a, b) => a * b);
}
console.log(grow([1, 2, 3, 4]));
