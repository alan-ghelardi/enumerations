import chai from 'chai'
import PrimaryColor from '../examples/primary-color'

chai.should()

const {BLUE, RED, YELLOW} = PrimaryColor

describe('enum.ordinal', () => {

  it('is a number between 0 and n describing the order in which the constant was declared', () => {
    0 .should .be .equal (BLUE.ordinal)
    1 .should .be .equal (RED.ordinal)
    2 .should .be .equal (YELLOW.ordinal)
  })
})

