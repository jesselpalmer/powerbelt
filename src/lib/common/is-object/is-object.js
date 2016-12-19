/**
 * isObject()
 * ----------
 * Method that tests whether a value is a boolean or not.
 * @param {any} value - The value that will be tested.
 * @return {boolean} - Whether a value is a boolean or not.
 */
export default function isObject(value) {
	return typeof value === 'object' &&
		arguments.length === 1 &&
		value !== null &&
		Object.prototype.toString.call(value) !== '[object Array]';
}
