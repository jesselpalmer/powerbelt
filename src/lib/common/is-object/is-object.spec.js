import isObject from './is-object';

const expect = require('chai').expect;

describe('common :: isObject tests', () => {
	it('should be true for objects', () => {
		const school = {name: 'stanford'};
		expect(isObject(school)).to.equal(true);
	});

	it('should be false for multiple objects', () => {
		const school1 = {name: 'carnegie mellon'};
		const school2 = {name: 'cal'};
		expect(isObject(school1, school2)).to.equal(false);
	});

	it('should be false for numbers', () => {
		expect(isObject(4)).to.equal(false);
	});

	it('should be false for boolean', () => {
		expect(isObject(true)).to.equal(false);
	});

	it('should be false for strings', () => {
		expect(isObject('mit')).to.equal(false);
	});

	it('should be false for arrays', () => {
		expect(isObject([5, 1])).to.equal(false);
	});

	it('should be false for multiple numbers', () => {
		expect(isObject(2, 3)).to.equal(false);
	});

	it('should be false for undefined values', () => {
		let school;
		expect(isObject(school)).to.equal(false);
	});

	it('should be false for null values', () => {
		let school = null;
		expect(isObject(school)).to.equal(false);
	});
});
