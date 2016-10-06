import {AssertionError} from 'assert'
import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'
import PrimaryColor from '../examples/primary-color'

chai.should()

const expect = chai.expect
const YELLOW = PrimaryColor.YELLOW

describe('.valueOf(name)', () => {

  it('throws an AssertionError when the name is not a string', () => {
    expect(() => {
      CardinalDirection.valueOf()
    }).to .throw(AssertionError, 'Parameter `name` must be a string')
  })

  it('returns the constant that corresponds to specified name', () => {
    YELLOW .should .be .equal(PrimaryColor.valueOf('YELLOW'))
  })

  it('throws an AssertionError when the name does not matches any existing constant', () => {
    expect(() => {
      PrimaryColor.valueOf('GREEN')
    }).to .throw(AssertionError, 'No such constant `GREEN`')
  })
})
