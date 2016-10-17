import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'

chai.should()

const {NORTH, EAST, SOUTH, WEST} = CardinalDirection

describe('.all()', () => {

  it('returns an array with all declared constants', () => {
    const constants = CardinalDirection.all()
    
    Array.isArray(constants) .should .be .true
    constants.length .should .be .equal(4)
    
    const set = new Set(constants)
    
    set.has(NORTH) .should .be .true
    set.has(EAST) .should .be .true
    set.has(SOUTH) .should .be .true
    set.has(WEST) .should .be .true
  })
  
})
