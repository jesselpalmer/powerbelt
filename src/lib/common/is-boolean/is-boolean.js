/**
 * isBoolean()
 * -----------
 * Method that tests whether a value is a boolean or not.
 * @param {any} values - The values that will be tested.
 * @return {boolean} - Whether a value is a boolean or not.
 */
const isBoolean = (...values) => values.every((value) => typeof value === 'boolean');

export default isBoolean;
