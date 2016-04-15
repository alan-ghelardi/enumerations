assert = require 'assert'
{isArray, isString} = require 'util'

module.exports =
class Enum

  constructor: ->
    @type = @constructor.name
    
    if Object.isFrozen(@constructor)
      throw new Error("Cannot instantiate the enum #{@type}")

  compareTo: (that) ->
    if thistype isnt that.type
      throw new Error('Cannot compare two incompatible instances')

    if this.ordinal > that.ordinal 1
    else if this.ordinal is that.ordinal 0
    else -1

  toString: -> @name
  
  @of: (constants...) ->
    assert isArray(constants), "An array of constants must be provided for creating the enum #{@name}"

    constants.forEach (name, ordinal) =>
      constant = new this
      constant.name = name
      constant.ordinal = ordinal
      Object.freeze(constant)
      this[name] = constant

    Object.freeze(this)
    null

  @values: ->
    (constant for own constant of this when constant.type is this.constructor.name)
    .sort (a, b) -> a.compareTo(b)
    