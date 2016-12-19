export default function isObject(value) {
	return (typeof value === 'object') && (arguments.length === 1) && (value !== null) && !Array.isArray(value);
}
