import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'

chai.should()

const {WEST} = CardinalDirection 

describe('#toString()', () => {

  it('by default, returns the constant\'s name', () => {
    'WEST' .should .be .equal (WEST.toString())
  })
})
