/**
 * isNumber()
 * ----------
 * Method that tests whether a value is a number or not.
 * @param {any} values - The values that will be tested.
 * @return {boolean} - Whether the values are a number or not.
 */
const isNumber = (...values) => values.every(value => typeof value === 'number')

export default isNumber