import {AssertionError} from 'assert'
import {expect} from 'chai'
import Enum from '../src/enum'
import PrimaryColor from '../examples/primary-color'

const getType = (value) => {
  if (Array.isArray(value)) {
    return 'array'
  }
  return typeof value
}

const illegalEnumDeclaration = `Illegal enum declaration. The enum declaration must be a string or a plain 
object in the following form: 
{name: {property1: value1, property2: value2, propertyN: valueN }}`  

describe('.values(constants...)', () => {

  describe('when called on an initialized enum', () => {

    it('throws an AssertionError', () => {
      expect( () => {
        PrimaryColor.values('GREEN', 'VIOLET')
      }).to .throw(AssertionError, 'The constants of enum PrimaryColor have already been created')
    })

  })

  describe('when the parameter `constants` is not specified', () => {
  
    it('throws an AssertionError', () => {
      class MyEnum extends Enum {}
  
      expect( () => {
        MyEnum.values()
      }).to .throw(AssertionError, 'The parameter `constants` is mandatory for creating the enum MyEnum')
    })

  })

  describe('when the enum declaration contains more than one property', () => {

    it('throws an AssertionError', () => {
      class MyEnum extends Enum {}

      expect(() => {
        MyEnum.values({foo: {}, bar: {}})
      }).to .throw(AssertionError, illegalEnumDeclaration)

    })

  })

  describe('when the enum body is not a plain object', () => {

    it('throws an AssertionError', () => {
      class MyEnum extends Enum {}
      
      expect(() => {
        MyEnum.values({foo: null})
      }).to .throw(AssertionError, illegalEnumDeclaration)
    })

  })

  const wrongDeclarations = [ [], true, 12, () => {} ]

  wrongDeclarations.forEach(value => {
  
    describe(`when a(n) ${getType(value)} is passed as the enum declaration`, () => {
      it('throws an AssertionError', () => {
        class MyEnum extends Enum {}
        expect(() => {
          MyEnum.values('foo', {bar: {}}, value)
        }).to .throw(AssertionError, illegalEnumDeclaration)
      })
    })
  })


  const finalProperties = ['name',
                           'type',
                           'ordinal',
                           '_',
                           'isConstantOf',
                           'isSameTypeAs',
                           'valueOf']
  
  finalProperties.forEach(property => {

    describe(`when one attempts to override the property ${property}`, () => {
      
      it('throws an AssertionError', () => {
        class MyEnum extends Enum {}
        
        expect(() => {
          MyEnum.values({FOO: {[property]: 'invalid'}})
        }).to .throw(AssertionError, /Cannot override final property\(ies\)/)
      
      })
      
    })
    
  })

})
