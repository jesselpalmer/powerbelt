import sample from './sample';

const expect = require('chai').expect;

describe('sample :: sample tests', () => {
  it('should be 2', () => {
    expect(sample(2)).to.equal(4);
  });
});
