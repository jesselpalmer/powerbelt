/**
 * isNumber()
 * ----------
 * Method that tests whether a value is a number or not.
 * @param {any} value - The value that will be tested.
 * @return {boolean} - Whether a value is a number or not.
 */
export default function isNumber(value) {
  return typeof value === 'number' && arguments.length === 1;
}
