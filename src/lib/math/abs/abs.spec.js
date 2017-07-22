/* eslint-env mocha */

import abs from './abs'

const expect = require('chai').expect

describe('math :: abs tests', () => {
  it('should be 2', () => {
    expect(abs(2)).to.equal(2)
  })

  it('should be 4', () => {
    expect(abs(-4)).to.equal(4)
  })

  it('should an error thrown if string is used', () => {
    expect(() => { abs('3') }).to.throw(Error)
  })
})
