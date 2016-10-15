import {AssertionError} from 'assert'
import Enum from '../src/enum'
import {expect} from 'chai'

describe('.constructor', () => {

  it('throws an AssertionError when one attempts to instantiate the enum class', () => {
    expect( () => {
      new Enum()
    }).to .throw(AssertionError, 'The type Enum may not be instantiated')
  })
  
  it('throws an AssertionError when one attempts to instantiate an enum subclass', () => {
    class MyEnum extends Enum {}
    
    expect( () => {
      new MyEnum()
    }).to .throw(AssertionError, 'The type MyEnum may not be instantiated')
  })
  
})
