import isSquared from './is-squared';

const expect = require('chai').expect;

describe('math :: isSquared tests', () => {
	it('should be true for squared positive integers', () => {
		expect(isSquared(169)).to.be.equal(true);
	});

	it('should be false for non-squared positive integers', () => {
		expect(isSquared(987)).to.be.equal(false);
	});

	it('should be false for negative integers', () => {
		expect(isSquared(-81)).to.be.equal(false);
	});

	it('should be false for zero', () => {
		expect(isSquared(0)).to.be.equal(false);
	});
});
