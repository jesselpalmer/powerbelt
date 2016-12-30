import square from './square';

const expect = require('chai').expect;

describe('common :: square tests', () => {
	it('should be 4', () => {
		expect(square(2)).to.equal(4);
	});

	it('should be 4', () => {
		expect(square(-2)).to.equal(4);
	});

	it('should be 0', () => {
		expect(square(0)).to.equal(0);
	});

	it('should be 144', () => {
		expect(square(12)).to.equal(144);
	});
});
