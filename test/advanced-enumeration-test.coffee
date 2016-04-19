{AssertionError} = require 'assert'
{expect} = require 'chai'
Enum = require '../src/enumeration'
ArithmeticOperation = require '../examples/arithmetic-operation'

{SUM, SUBTRACTION, MULTIPLICATION, DIVISION} = ArithmeticOperation

describe 'Enum', ->

  describe '.values(constants...)', ->

    describe 'when a list of objects is passed as parameter', ->

      it 'throws an AssertionError if the one of these objects contains more than one field', ->
        class InvalidEnum extends Enum

        expect( ->
          InvalidEnum.values({FOO: {}, BAR: {}}, {BAZ: {}}))
        .to .throw AssertionError

      it 'creates all expected constants', ->
        expect(ArithmeticOperation) .to .have .property 'SUM'
        expect(ArithmeticOperation) .to .have .property 'SUBTRACTION'
        expect(ArithmeticOperation) .to .have .property 'MULTIPLICATION'
        expect(ArithmeticOperation) .to .have .property 'DIVISION'

      it 'adds all properties to each constant', ->
        expect(SUM.operator) .to .be .equal '+'
        expect(SUBTRACTION.operator) .to .be .equal '-'
        expect(MULTIPLICATION.operator) .to .be .equal '*'
        expect(DIVISION.operator) .to .be .equal '/'

      it 'also adds all methods to each constant', ->
        [a, b] = [6, 2]

        expect(SUM.apply(a, b)) .to .be .equal 8
        expect(SUBTRACTION.apply(a, b)) .to .be .equal 4
        expect(MULTIPLICATION.apply(a, b)) .to .be .equal 12
        expect(DIVISION.apply(a, b)) .to .be .equal 3