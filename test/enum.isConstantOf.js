import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'
import PrimaryColor from '../examples/primary-color'

chai.should()

const {BLUE, RED} = PrimaryColor

describe('#isConstantOf(anEnum)', () => {

  it('returns true', () => {
    BLUE.isConstantOf(PrimaryColor) .should .be .true
  })

  it('returns false', () => {
    RED.isConstantOf(CardinalDirection) .should .be .false
  })
})
