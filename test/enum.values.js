import chai from 'chai'
import ArithmeticOperation from '../examples/arithmetic-operation'
import CardinalDirection from '../examples/cardinal-direction'
import EmployeeType from '../examples/employee-type'
import PrimaryColor from '../examples/primary-color'

const expect = chai.expect

const {SUM, SUBTRACTION, MULTIPLICATION, DIVISION} = ArithmeticOperation
const {BLUE, RED, YELLOW} = PrimaryColor
const {SALES_SUPERVISOR, SALES_PERSON, SHOP_ASSISTANT} = EmployeeType

describe('.values(constants...)', () => {

  describe('when called with an array of strings', () => {

    it('creates all declared constant values', () => {
      expect(PrimaryColor) .to .have .property('BLUE')
      expect(PrimaryColor) .to .have .property('RED')
      expect(PrimaryColor) .to .have .property('YELLOW')
    })
  
    it('freezes the enum class making it immutable', () => {
      expect(CardinalDirection) .to .be .frozen
    })
  
    it('freezes all constants making them immutable', () => {
      expect(BLUE) .to .be .frozen
      expect(RED) .to .be .frozen
      expect(YELLOW) .to .be .frozen
    })

  })  

  describe('when a list of objects is passed as parameter', () => {

    it('creates all expected constants', () => {
      expect(ArithmeticOperation) .to .have .property ('SUM')
      expect(ArithmeticOperation) .to .have .property ('SUBTRACTION')
      expect(ArithmeticOperation) .to .have .property ('MULTIPLICATION')
      expect(ArithmeticOperation) .to .have .property ('DIVISION')
    })

    it('adds all properties to each constant', () => {
      expect(SUM.operator) .to .be .equal ('+')
      expect(SUBTRACTION.operator) .to .be .equal ('-')
      expect(MULTIPLICATION.operator) .to .be .equal ('*')
      expect(DIVISION.operator) .to .be .equal ('/')
    })

    it('also adds all methods to each constant', () => {
      const [a, b] = [6, 2]

      expect(SUM.apply(a, b)) .to .be .equal (8)
      expect(SUBTRACTION.apply(a, b)) .to .be .equal (4)
      expect(MULTIPLICATION.apply(a, b)) .to .be .equal (12)
      expect(DIVISION.apply(a, b)) .to .be .equal (3)
    })

  })
  
  describe('when one wants to override a method and call the super within it', () => {

    it('binds the `super` keyword to the parent enum', () => {
      570.00 .should .be .equal(SALES_PERSON.computeCommission(2850.00))
      570.00 .should .be .equal(SHOP_ASSISTANT.computeCommission(2850.00))
      620.00 .should .be .equal(SALES_SUPERVISOR.computeCommission(2850.00))
    })
  })

})
