/* eslint-env mocha */

import fourth from './fourth'

const expect = require('chai').expect

describe('array :: fourth tests', () => {
  it('should return fourth element', () => {
    const sampleArray = [1, 2, 3, 4]
    expect(fourth(sampleArray)).to.be.equal(4)
  })
})
