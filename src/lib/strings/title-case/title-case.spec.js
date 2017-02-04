import titleCase from './title-case';

const expect = require('chai').expect;

describe('strings :: reverse tests', () => {
  it('should be \'Introduction to Algorithms\'', () => {
    expect(titleCase('introduction to algorithms')).to.equal('Introduction to Algorithms');
  });

  it('should be \'The Art of Computer Programming\'', () => {
    expect(titleCase('the art of computer programming')).to.equal('The Art of Computer Programming');
  });
});
