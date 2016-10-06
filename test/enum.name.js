import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'

const {NORTH} = CardinalDirection

chai.should()

describe('.name', () => {

  it('is the name of the constant value', () => {
    'NORTH' .should .be .equal (NORTH.name)
  })
})

