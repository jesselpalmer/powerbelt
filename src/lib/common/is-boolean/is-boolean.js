/**
 * isBoolean()
 * -----------
 * Method that tests whether a value is a boolean or not.
 * @param {any} value - The value that will be tested.
 * @return {boolean} - Whether a value is a boolean or not.
 */
const isBoolean = (...args) => typeof args[0] === 'boolean' && args.length === 1;

export default isBoolean;
