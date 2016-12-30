/**
 * isSquared()
 * ----------
 * Method that returns whether or not a number is squared.
 * @param {number} num - The number that will be checked to see if it is squared.
 * @return {boolean} - The result of the squared check.
 */
export default function isSquared(num) {
	if (num === 0) return false;

	let count = 0;

	while (count <= num / 2) {
		if ((count * count) === num) {
			return true;
		}

		count++;
	}

	return false;
}
