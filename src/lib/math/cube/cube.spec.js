import cube from './cube';

const expect = require('chai').expect;

describe('common :: cube tests', () => {
	it('should be 8 when 2 is cubed', () => {
		expect(cube(2)).to.equal(8);
	});

	it('should be -81 when -3 is squared', () => {
		expect(cube(-3)).to.equal(-27);
	});

	it('should be 0 when 0 is cubed', () => {
		expect(cube(0)).to.equal(0);
	});

	it('should be 512 when 8 is squared', () => {
		expect(cube(8)).to.equal(512);
	});
});
