/**
 * isBoolean()
 * -----------
 * Method that tests whether a value is a boolean or not.
 * @param {any} value - The value that will be tested.
 * @return {boolean} - Whether a value is a boolean or not.
 */
export default function isBoolean (value) {
	return typeof value === 'boolean' && arguments.length === 1;
}
