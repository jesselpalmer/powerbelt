/**
 * isString()
 * ----------
 * Method that tests whether a value is a string or not.
 * @param {any} values - The value that will be tested.
 * @return {boolean} - Whether a value is a string or not.
 */
const isString = (...values) => values.every(value => typeof value === 'string')

export default isString
