import chai from 'chai'
import PrimaryColor from '../examples/primary-color'

chai.should()

const {BLUE} = PrimaryColor

describe('enum._', () => {

  it('is an alias for #toString()', () => {
    'BLUE' .should .be .equal (BLUE._)
  })
})
