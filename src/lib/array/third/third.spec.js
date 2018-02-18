/* eslint-env mocha */

import third from './third'

const expect = require('chai').expect

describe('array :: third tests', () => {
  it('should return third element', () => {
    const sampleArray = [1, 2, 3]
    expect(third(sampleArray)).to.be.equal(3)
  })
})
