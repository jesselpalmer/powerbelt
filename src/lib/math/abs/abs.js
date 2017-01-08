/**
 * abs()
 * ----------
 * Method that returns the absolute value of a number.
 * @param {number} num - The number that the absolute value is needed for.
 * @return {number} - absolute value.
 */

import isNumber from '../../common/is-number/is-number';
import errorMessages from '../../errors/error-messages';

export default function abs(num) {
  if (!isNumber(num)) {
    throw new Error(errorMessages.INVALID_NUMBER_ERROR);
  }

	return num < 0 ? num *= -1 : num;
}
