assert = require 'assert'
{isString} = require 'util'

nonOverridableFields = [ 'name', 'ordinal', 'type' ]

module.exports = (enumClass, constants) ->
  constants.forEach (descriptor, ordinal) ->
    addNewConstantTo(enumClass, descriptor, ordinal)

  Object.freeze(enumClass)
  null

addNewConstantTo = (enumClass, descriptor, ordinal) ->
  instance = new enumClass()
  instance.ordinal = ordinal
  name = null

  if isString(descriptor)
    name = descriptor
  else
    keys = Object.keys(descriptor)
    assert keys.length is 1, "For creating the enum #{enumClass.name} you must provide a list of objects in the following format: {constant1: {...}}, {constant2: {...}}, etc."
    name = keys[0]
    copyFields(instance, descriptor[name])

  instance.name = name
  Object.freeze(instance)
  enumClass[name] = instance

copyFields = (target, fields) ->
  for key, value of fields when key not in nonOverridableFields
    target[key] = value
