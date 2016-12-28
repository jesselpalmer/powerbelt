/**
 * isEven()
 * ----------
 * Method that tests whether a number is an even.
 * @param {any} num - The number that will be tested.
 * @return {boolean} - Whether a number is even or not.
 */
export default function isEven(num) {
	return num % 2 === 0 && arguments.length === 1;
}
