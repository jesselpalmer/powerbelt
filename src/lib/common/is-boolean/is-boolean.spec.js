import isBoolean from './is-boolean';

const expect = require('chai').expect;

describe('common :: isBoolean tests', () => {
  it('should be true for boolean', () => {
    expect(isBoolean(true)).to.be.equal(true);
  });

  it('should be true if multiple booleans are passed in', () => {
    expect(isBoolean(true, false)).to.be.equal(true);
    expect(isBoolean(true, true)).to.be.equal(true);
    expect(isBoolean(false, true)).to.be.equal(true);
    expect(isBoolean(false, false)).to.be.equal(true);
    expect(isBoolean(false, false, true)).to.be.equal(true);
    expect(isBoolean(false, false, false)).to.be.equal(true);
    expect(isBoolean(false, false, false, true)).to.be.equal(true);
  });

  it('should be false if mulitple values are passed in and not all the values are a boolean', () => {
    expect(isBoolean(true, 1)).to.be.equal(false);
    expect(isBoolean(false, 'today', true)).to.be.equal(false);
    expect(isBoolean('nice', 'today', true)).to.be.equal(false);
    expect(isBoolean('nice', 1, true)).to.be.equal(false);
    expect(isBoolean(true, 1, true)).to.be.equal(false);
    expect(isBoolean(true, 1, true, { name: 'siliconvalley' })).to.be.equal(false);
  });

  it('should be false for numbers', () => {
    expect(isBoolean(4)).to.be.equal(false);
  });

  it('should be false for strings', () => {
    expect(isBoolean('test')).to.be.equal(false);
  });

  it('should be false for objects', () => {
    expect(isBoolean({ name: 'gracie' })).to.be.equal(false);
  });

  it('should be false for arrays', () => {
    expect(isBoolean([5, 1])).to.be.equal(false);
  });

  it('should be false for undefined values', () => {
    let animal;
    expect(isBoolean(animal)).to.be.equal(false);
  });

  it('should be false for null values', () => {
    const animal = null;
    expect(isBoolean(animal)).to.be.equal(false);
  });
});
