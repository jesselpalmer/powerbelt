/**
 * isBoolean()
 * -----------
 * Method that tests whether a value is a boolean or not.
 * @param {any} values - The values that will be tested.
 * @return {boolean} - Whether a value is a boolean or not.
 */
const isBoolean = (...values) => { 
  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i];

    if (typeof currentValue !== 'boolean') {
      return false;
    }
  }

  return true;
}

export default isBoolean;
