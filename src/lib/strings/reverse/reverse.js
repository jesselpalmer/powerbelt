/**
 * reverse()
 * ----------
 * Method that returns a string in reverse.
 * @param {word} string - The string that will be reversed.
 * @return {string} - The reversed string.
 */
export default function reverse(word) {
  let reversedWord = '';
  const startingPoint = word.length - 1;

  for (let i = startingPoint; i >= 0; i -= 1) {
    reversedWord += word[i];
  }

  return reversedWord;
}
