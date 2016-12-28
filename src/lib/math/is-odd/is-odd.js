/**
 * isOdd()
 * ----------
 * Method that tests whether a number is an odd.
 * @param {any} num - The number that will be tested.
 * @return {boolean} - Whether a number is odd or not.
 */
export default function isOdd(num) {
	return num % 2 !== 0 && arguments.length === 1;
}
