import isString from '../../common/is-string/is-string'
import INVALID_STRING_ERROR from '../../errors/error-messages'

/**
 * reverse()
 * ----------
 * Method that returns a string in reverse.
 *
 * @param {word} string - The string that will be reversed.
 * @return {string} - The reversed string.
 */
export default function reverse (word) {
  if (!isString(word)) {
    throw new Error(INVALID_STRING_ERROR)
  }

  let reversedWord = ''
  const startingPoint = word.length - 1

  for (let i = startingPoint; i >= 0; i -= 1) {
    reversedWord += word[i]
  }

  return reversedWord
}
