import titleCase from './title-case';

const expect = require('chai').expect;

describe('strings :: reverse tests', () => {
  it('should be \'Introduction to Algorithms\' for all lowercase strings', () => {
    const lowerCaseBookTitle = 'introduction to algorithms';
    expect(titleCase(lowerCaseBookTitle)).to.equal('Introduction to Algorithms');
  });

  it('should be \'The Art of Computer Programming\' mixed case strings', () => {
    const mixedCaseBookTitle = 'the Art of comPUter programmIng';
    expect(titleCase(mixedCaseBookTitle)).to.equal('The Art of Computer Programming');
  });

  it('should throw an error if a number is passed to it', () => {
    expect(() => { titleCase(5); }).to.throw(Error);
  });
});
