import isString from './is-string';

const expect = require('chai').expect;

describe('common :: isString tests', () => {
	it('should be true for strings', () => {
		const name = 'Ada Lovelace';
		expect(isString(name)).to.be.equal(true);
	});
});
