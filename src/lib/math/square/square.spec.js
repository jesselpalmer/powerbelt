import square from './square';

const expect = require('chai').expect;

describe('common :: square tests', () => {
	it('should be 4 when 2 is squared', () => {
		expect(square(2)).to.equal(4);
	});

	it('should be 4 when -2 is squared', () => {
		expect(square(-2)).to.equal(4);
	});

	it('should be 0 when 0 is squared', () => {
		expect(square(0)).to.equal(0);
	});

	it('should be 144 when 12 is squared', () => {
		expect(square(12)).to.equal(144);
	});
});
