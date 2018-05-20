/* eslint-env mocha */

import last from './last'

const expect = require('chai').expect

describe('array :: last tests', () => {
  it('should return last element', () => {
    const sampleArray = [1, 2, 3]
    expect(last(sampleArray)).to.be.equal(3)
  })
})
