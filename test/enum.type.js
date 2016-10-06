import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'

chai.should()

const {EAST} = CardinalDirection 

describe('enum.type', () => {

  it('is the name of the enum class', () => {
    'CardinalDirection' .should .be .equal(EAST.type)
  })
})

