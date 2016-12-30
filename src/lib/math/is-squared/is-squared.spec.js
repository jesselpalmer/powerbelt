import isSquared from './is-squared';

const expect = require('chai').expect;

describe('common :: isSquared tests', () => {
	it('should be true for squared positive integers', () => {
		expect(isSquared(4)).to.equal(true);
		expect(isSquared(144)).to.equal(true);
		expect(isSquared(169)).to.equal(true);
	});

	it('should be false for non-squared positive integers', () => {
		expect(isSquared(5)).to.equal(false);
		expect(isSquared(987)).to.equal(false);
	});

	it('should be false for negative integers', () => {
		expect(isSquared(-81)).to.equal(false);
		expect(isSquared(-64)).to.equal(false);
		expect(isSquared(-9)).to.equal(false);
		expect(isSquared(-17)).to.equal(false);
		expect(isSquared(-91)).to.equal(false);
	});

	it('should be false for zero', () => {
		expect(isSquared(0)).to.equal(false);
	});
});
