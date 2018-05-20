import isNumber from '../../common/is-number'
import errorMessages from '../../errors'

/**
 * abs()
 * ----------
 * Method that returns the absolute value of a number.
 *
 * @param {number} num - The number that the absolute value is needed for.
 * @return {number} - absolute value.
 */
export default function abs (num) {
  let newNumber = num

  if (!isNumber(num)) {
    throw new Error(errorMessages.INVALID_NUMBER_ERROR)
  }

  newNumber = num < 0 ? (newNumber *= -1) : num

  return newNumber
}
