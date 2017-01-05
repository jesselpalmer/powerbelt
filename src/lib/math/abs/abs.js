/**
 * abs()
 * ----------
 * Method that returns the absolute value of a number.
 * @param {number} num - The number that the absolute value is needed for.
 * @return {number} - absolute value.
 */
export default function abs(num) {
	return num < 0 ? num *= -1 : num;
}
