import isNumber from './is-number';

const expect = require('chai').expect;

describe('common :: isNumber tests', () => {
  it('should be true for numbers', () => {
    expect(isNumber(4)).to.be.equal(true);
  });

  it('should be false for multiple number', () => {
    expect(isNumber(4, 3)).to.be.equal(false);
  });

  it('should be false for boolean', () => {
    expect(isNumber(true)).to.be.equal(false);
  });

  it('should be false for strings', () => {
    expect(isNumber('test')).to.be.equal(false);
  });

  it('should be false for objects', () => {
    expect(isNumber({name: 'gracie'})).to.be.equal(false);
  });

  it('should be false for arrays', () => {
    expect(isNumber([5, 1])).to.be.equal(false);
  });

  it('should be false for multiple numbers', () => {
    expect(isNumber(2, 3)).to.be.equal(false);
  });

  it('should be false for undefined values', () => {
    let animal;
    expect(isNumber(animal)).to.be.equal(false);
  });

  it('should be false for null values', () => {
    let animal = null;
    expect(isNumber(animal)).to.be.equal(false);
  });
});
