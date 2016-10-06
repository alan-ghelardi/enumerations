import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'
import PrimaryColor from '../examples/primary-color'

chai.should()

const {NORTH, SOUTH, WEST} = CardinalDirection
const {YELLOW} = PrimaryColor 

describe('#isSameTypeAs(that)', () => {

  it('returns true', () => {
    NORTH.isSameTypeAs(WEST) .should .be .true
  })

  it('returns false', () => {
    SOUTH.isSameTypeAs(YELLOW) .should .be .false
  })
})
