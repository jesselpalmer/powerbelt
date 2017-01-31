export default function reverse(word) {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i -= 1) {
    reversedWord += word[i];
  }

  return reversedWord;
}
