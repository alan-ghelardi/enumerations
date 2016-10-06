import chai from 'chai'
import CardinalDirection from '../examples/cardinal-direction'
import PrimaryColor from '../examples/primary-color'

const {NORTH} = CardinalDirection
const {BLUE, RED, YELLOW} = PrimaryColor

chai.should()
const {expect} = chai

describe('#compareTo(that)', () => {

  it('throws an error when two incompatible instances are compared', () => {
    expect( () => {
      BLUE.compareTo(NORTH)
    }).to .throw(Error, 'Cannot compare two incompatible instances: PrimaryColor and CardinalDirection')
  })

  it('by default compares the instances from their ordinals', () => {
    0 .should .be .equal (BLUE.compareTo(BLUE))
    1 .should .be .equal (RED.compareTo(BLUE))
    -1 .should .be .equal (RED.compareTo(YELLOW))
    1 .should .be .equal (YELLOW .compareTo(RED))
    1 .should .be .equal (YELLOW .compareTo(BLUE))
  })
})
