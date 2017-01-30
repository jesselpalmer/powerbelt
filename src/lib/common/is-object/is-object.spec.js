import isObject from './is-object';

const expect = require('chai').expect;

describe('common :: isObject tests', () => {
  it('should be true for objects', () => {
    const school = { name: 'stanford' };
    expect(isObject(school)).to.be.equal(true);
  });

  it('should be false for multiple objects', () => {
    const school1 = { name: 'carnegie mellon' };
    const school2 = { name: 'cal' };
    expect(isObject(school1, school2)).to.be.equal(false);
  });

  it('should be false for numbers', () => {
    expect(isObject(4)).to.be.equal(false);
  });

  it('should be false for boolean', () => {
    expect(isObject(true)).to.be.equal(false);
  });

  it('should be false for strings', () => {
    expect(isObject('mit')).to.be.equal(false);
  });

  it('should be false for arrays', () => {
    expect(isObject([5, 1])).to.be.equal(false);
  });

  it('should be false for multiple numbers', () => {
    expect(isObject(2, 3)).to.be.equal(false);
  });

  it('should be false for undefined values', () => {
    let school;
    expect(isObject(school)).to.be.equal(false);
  });

  it('should be false for null values', () => {
    const school = null;
    expect(isObject(school)).to.be.equal(false);
  });
});
