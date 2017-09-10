/* eslint-env mocha */

import isString from './is-string'

const expect = require('chai').expect

describe('common :: isString tests', () => {
  it('should be true for strings', () => {
    const name = 'Ada Lovelace'
    expect(isString(name)).to.be.equal(true)
  })

  it('should be false for strings', () => {
    const name = 5
    expect(isString(name)).to.be.equal(false)
  })

  it('should be true for strings', () => {
    const name = 'Ada Lovelace'
    const name2 = 'Ada Lovelace'
    expect(isString(name, name2)).to.be.equal(true)
  })

  it('should be true for strings', () => {
    const name = 'Ada Lovelace'
    const name2 = 3
    expect(isString(name, name2)).to.be.equal(false)
  })
})
