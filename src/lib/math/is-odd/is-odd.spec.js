import isOdd from './is-odd';

const expect = require('chai').expect;

describe('common :: isOdd tests', () => {
	it('should be false when 2 is tested', () => {
		expect(isOdd(2)).to.equal(false);
	});

	it('should be false when -2 is tested', () => {
		expect(isOdd(-2)).to.equal(false);
	});

	it('should be false when 0 is tested', () => {
		expect(isOdd(0)).to.equal(false);
	});

	it('should be true when 11 is tested', () => {
		expect(isOdd(11)).to.equal(true);
	});

	it('should be true when -231 is tested', () => {
		expect(isOdd(-231)).to.equal(true);
	});
});
