{AssertionError} = require 'assert'
chai = require 'chai'
Enum = require '../src/enumeration'
CardinalDirection = require '../examples/cardinal-direction'
PrimaryColor = require '../examples/primary-color'

chai.should()
expect = chai.expect

{NORTH, EAST, SOUTH, WEST} = CardinalDirection
{BLUE, RED, YELLOW} = PrimaryColor

describe 'Enum', ->

  describe '.values(constants...)', ->

    it 'throws an AssertionError when the method is called over an initialized enum', ->
      expect( ->
        PrimaryColor.values 'GREEN', 'VIOLET')
      .to .throw AssertionError, 'The constants of enum PrimaryColor has already been created'

    it 'throws an AssertionError when the parameter constants is omited', ->
      class UnitializedEnum extends Enum

      expect( ->
        UnitializedEnum.values())
      .to .throw AssertionError, 'The parameter `name` is required for creating the enum UnitializedEnum'

    it 'creates all declared constant values', ->
      expect(PrimaryColor) .to .have .property 'BLUE'
      expect(PrimaryColor) .to .have .property 'RED'
      expect(PrimaryColor) .to .have .property 'YELLOW'

    it 'freezes the enum class making it immutable', ->
      expect(CardinalDirection) .to .be .frozen

    it 'freezes all constants making them immutable', ->
      expect(BLUE) .to .be .frozen
      expect(RED) .to .be .frozen
      expect(YELLOW) .to .be .frozen

  describe '.valueOf(name)', ->

    it 'throws an AssertionError when the name is not a string', ->
      expect( ->
        CardinalDirection.valueOf())
      .to .throw AssertionError, 'Parameter `name` must be a string'

    it 'returns the constant that corresponds to specified name', ->
      YELLOW .should .be .equal PrimaryColor.valueOf('YELLOW')

    it 'throws an AssertionError when the name does not matches any existing constant', ->
      expect( ->
        PrimaryColor.valueOf('GREEN'))
      .to .throw AssertionError, 'No such constant `GREEN`'

  describe '.all()', ->

    it 'returns all constants sorted by #compareTo() method', ->
      constants = CardinalDirection.all()
      [ NORTH, EAST, SOUTH, WEST ] .should .be .eql constants

  describe '.constructor', ->

    it 'throws an AssertionError when one attempts to instantiate the enum class after calling the .values()', ->
      expect( ->
        new PrimaryColor())
      .to .throw AssertionError, 'Cannot instantiate the enum PrimaryColor'

  describe '.name', ->

    it 'is the name of the constant value', ->
      'NORTH' .should .be .equal NORTH.name

  describe '.type', ->

    it 'is the name of the enum class', ->
      'CardinalDirection' .should .be .equal EAST.type

  describe '.ordinal', ->

    it 'is a number between 0 and n describing the order in which the constant was declared', ->
      0 .should .be .equal BLUE.ordinal
      1 .should .be .equal RED.ordinal
      2 .should .be .equal YELLOW.ordinal

  describe '#isConstantOf(anEnum)', ->

    it 'returns true', ->
      BLUE.isConstantOf(PrimaryColor) .should .be .true

    it 'returns false', ->
      RED.isConstantOf(CardinalDirection) .should .be .false

  describe '#isSameTypeAs(that)', ->

    it 'returns true', ->
      NORTH.isSameTypeAs(WEST) .should .be .true

    it 'returns false', ->
      SOUTH.isSameTypeAs(YELLOW) .should .be .false

  describe '#compareTo(that)', ->

    it 'throws an error when two incompatible instances are compared', ->
      expect( ->
        BLUE.compareTo(NORTH))
      .to .throw Error, 'Cannot compare two incompatible instances: PrimaryColor and CardinalDirection'

    it 'by default compares the instances from their ordinals', ->
      0 .should .be .equal BLUE.compareTo(BLUE)
      1 .should .be .equal RED.compareTo(BLUE)
      (-1) .should .be .equal RED.compareTo(YELLOW)

  describe '#toString()', ->

    it 'by default, returns the constant\'s name', ->
      'WEST' .should .be .equal WEST.toString()
