assert = require 'assert'
{isArray, isString} = require 'util'
enumerationify = require './enumerationify'

module.exports =
class Enum

  constructor: ->
    @type = @constructor.name

    assert not Object.isFrozen(@constructor), "Cannot instantiate the enum #{@type}"

  isConstantOf: (anEnum) ->
    this.type is anEnum.name

  isSameTypeAs: (that) ->
    @type is that.type

  compareTo: (that) ->
    if not this.isSameTypeAs(that)
      throw new Error("Cannot compare two incompatible instances: #{@type} and #{that.type}")

    if this.ordinal > that.ordinal
      1
    else if this.ordinal is that.ordinal
      0
    else
      -1

  toString: -> @name

  @values: (constants...) ->
    assert not Object.isFrozen(this), "The constants of enum #{@name} has already been created "
    assert isArray(constants), "An array of constants must be provided for creating the enum #{@name}"

    enumerationify this, constants
    null

  @valueOf: (name) ->
    assert isString(name), 'Parameter `name` must be a string'
    result = (value for key, value of this when value.isConstantOf? and value.isConstantOf(this) and key is name)

    assert result.length, "No such constant `#{name}`"

    result[0]

  @all: ->
    constants = (value for key, value of this when value.isConstantOf? and value.isConstantOf(this))
    constants.sort (a, b) -> a.compareTo(b)

