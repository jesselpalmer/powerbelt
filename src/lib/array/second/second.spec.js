/* eslint-env mocha */

import second from './second'

const expect = require('chai').expect

describe('array :: second tests', () => {
  it('should return second element', () => {
    const sampleArray = [1, 2, 3]
    expect(second(sampleArray)).to.be.equal(2)
  })
})
