/* eslint-env mocha */

import isEven from './is-even'

const expect = require('chai').expect

describe('math :: isEven tests', () => {
  it('should be true when 2 is tested', () => {
    expect(isEven(2)).to.be.equal(true)
  })

  it('should be true when -2 is tested', () => {
    expect(isEven(-2)).to.be.equal(true)
  })

  it('should be true when 0 is tested', () => {
    expect(isEven(0)).to.be.equal(true)
  })

  it('should be false when 11 is tested', () => {
    expect(isEven(11)).to.be.equal(false)
  })

  it('should be false when -231 is tested', () => {
    expect(isEven(-231)).to.be.equal(false)
  })
})
