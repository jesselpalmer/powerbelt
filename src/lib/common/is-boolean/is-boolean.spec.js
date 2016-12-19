import isBoolean from './is-boolean';

const expect = require('chai').expect;

describe('common :: isBoolean tests', () => {
	it('should be true for boolean', () => {
		expect(isBoolean(true)).to.equal(true);
	});

	it('should be false for multiple booleans', () => {
		expect(isBoolean(true, false)).to.equal(false);
	});

	it('should be false for numbers', () => {
		expect(isBoolean(4)).to.equal(false);
	});

	it('should be false for strings', () => {
		expect(isBoolean('test')).to.equal(false);
	});

	it('should be false for objects', () => {
		expect(isBoolean({name: 'gracie'})).to.equal(false);
	});

	it('should be false for arrays', () => {
		expect(isBoolean([5, 1])).to.equal(false);
	});

	it('should be false for multiple numbers', () => {
		expect(isBoolean(2, 3)).to.equal(false);
	});

	it('should be false for undefined values', () => {
		let animal;
		expect(isBoolean(animal)).to.equal(false);
	});

	it('should be false for null values', () => {
		let animal = null;
		expect(isBoolean(animal)).to.equal(false);
	});
});
