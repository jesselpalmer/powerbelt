/* eslint-env mocha */

import first from './first'

const expect = require('chai').expect

describe('array :: first tests', () => {
  it('should return first element', () => {
    const sampleArray = [1, 2, 3];
    expect(first(sampleArray)).to.be.equal(1)
  })
})
