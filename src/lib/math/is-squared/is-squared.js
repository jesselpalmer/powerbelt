export default function isSquared(num) {
	let count = 0;

	while (count <= num / 2) {
		if ((count * count) === num) {
			return true;
		}

		count++;
	}

	return false;
}
