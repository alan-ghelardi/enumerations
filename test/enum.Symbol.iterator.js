import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'

const expect = chai.expect
const {NORTH, SOUTH, EAST, WEST} = CardinalDirection

describe('[Symbol.iterator]', () => {

  it('iterates over all defined constants', () => {
    const directions = new Set()
    
    for (let direction of CardinalDirection) {
      directions.add(direction)
    }
    
    expect(directions.size) .to .be .equal(4)
    expect(directions.has(NORTH)) .to .be .true
    expect(directions.has(SOUTH)) .to .be .true
    expect(directions.has(EAST)) .to .be .true
    expect(directions.has(WEST)) .to .be .true
  })
  
})
