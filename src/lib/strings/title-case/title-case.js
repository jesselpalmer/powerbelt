import isString from '../../common/is-string/is-string'
import INVALID_STRING_ERROR from '../../errors/error-messages'
/**
 * titleCase()
 * ----------
 * Method that returns a string in Title Case.
 *
 * @param {str} string - The string that will be title cased.
 * @return {string} - The title cased string.
 */
export default function titleCase(str) {
  if (!isString(str)) {
    throw new Error(INVALID_STRING_ERROR)
  }

  const words = str.split(' ')
  const len = words.length
  const result = []
  const ignoreWords = ['to', 'the', 'of']

  for (let i = 0; i < len; i += 1) {
    let currentWord = words[i]

    if (i === 0) {
      currentWord =
        currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase()
    } else if (ignoreWords.indexOf(currentWord) === -1) {
      currentWord =
        currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase()
    }

    result.push(currentWord)
  }

  return result.join(' ')
}
