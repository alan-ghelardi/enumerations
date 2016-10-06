import {AssertionError} from 'assert'
import {expect} from 'chai'
import PrimaryColor from '../examples/primary-color'

describe('.constructor', () => {

  it('throws an AssertionError when one attempts to instantiate the enum class after calling the .values()', () => {
    expect( () => {
      new PrimaryColor()
    }).to .throw(AssertionError, 'Cannot instantiate the enum PrimaryColor')
  })
})

