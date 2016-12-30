import isSquared from './is-squared';

const expect = require('chai').expect;

describe('common :: isSquared tests', () => {
	it('should be true for squared positive integers', () => {
		expect(isSquared(4)).to.be.true;
		expect(isSquared(144)).to.be.true;
		expect(isSquared(169)).to.be.true;
	});

	it('should be false for non-squared positive integers', () => {
		expect(isSquared(5)).to.be.false;
		expect(isSquared(987)).to.be.false;
	});

	it('should be false for negative integers', () => {
		expect(isSquared(-81)).to.be.false;
		expect(isSquared(-64)).to.be.false;
		expect(isSquared(-9)).to.be.false;
		expect(isSquared(-17)).to.be.false;
		expect(isSquared(-91)).to.be.false;
	});

	it('should be false for zero', () => {
		expect(isSquared(0)).to.be.false;
	});
});
