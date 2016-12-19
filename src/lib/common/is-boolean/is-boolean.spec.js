import isBoolean from './is-boolean';

const expect = require('chai').expect;

describe('common :: isBoolean tests', () => {
	it('should be true for boolean', () => {
		expect(isBoolean(true)).to.equal(true);
	});

	it('should be false for numbers', () => {
		expect(isBoolean(4)).to.equal(false);
	});

	it('should be false for strings', () => {
		expect(isBoolean('test')).to.equal(false);
	});
});
