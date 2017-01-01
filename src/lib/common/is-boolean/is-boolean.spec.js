import isBoolean from './is-boolean';

const expect = require('chai').expect;

describe('common :: isBoolean tests', () => {
	it('should be true for boolean', () => {
		expect(isBoolean(true)).to.be.equal(true);
	});

	it('should be false for multiple booleans', () => {
		expect(isBoolean(true, false)).to.be.equal(false);
	});

	it('should be false for numbers', () => {
		expect(isBoolean(4)).to.be.equal(false);
	});

	it('should be false for strings', () => {
		expect(isBoolean('test')).to.be.equal(false);
	});

	it('should be false for objects', () => {
		expect(isBoolean({name: 'gracie'})).to.be.equal(false);
	});

	it('should be false for arrays', () => {
		expect(isBoolean([5, 1])).to.be.equal(false);
	});

	it('should be false for multiple numbers', () => {
		expect(isBoolean(2, 3)).to.be.equal(false);
	});

	it('should be false for undefined values', () => {
		let animal;
		expect(isBoolean(animal)).to.be.equal(false);
	});

	it('should be false for null values', () => {
		let animal = null;
		expect(isBoolean(animal)).to.be.equal(false);
	});
});
