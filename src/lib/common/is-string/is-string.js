/**
 * isString()
 * ----------
 * Method that tests whether a value is a string or not.
 * @param {any} value - The value that will be tested.
 * @return {boolean} - Whether a value is a string or not.
 */
export default function isString (value) {
  return typeof value === 'string' && arguments.length === 1
}
