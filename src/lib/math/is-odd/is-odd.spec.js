import isOdd from './is-odd';

const expect = require('chai').expect;

describe('common :: isOdd tests', () => {
	it('should be false when 2 is tested', () => {
		expect(isOdd(2)).to.be.false;
	});

	it('should be false when -2 is tested', () => {
		expect(isOdd(-2)).to.be.false;
	});

	it('should be false when 0 is tested', () => {
		expect(isOdd(0)).to.be.false;
	});

	it('should be true when 11 is tested', () => {
		expect(isOdd(11)).to.be.true;
	});

	it('should be true when -231 is tested', () => {
		expect(isOdd(-231)).to.be.true;
	});
});
