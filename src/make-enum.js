import assert from 'assert'
import copyProperties from './copy-properties'
import {isString} from 'util'

export default (enumClass, constants) => {
  constants.forEach((descriptor, ordinal) => {
    addNewConstantTo(enumClass, descriptor, ordinal)
  })

  Object.freeze(enumClass)
}

const addNewConstantTo = (enumClass, descriptor, ordinal) => {
  const instance = new enumClass()
  instance.ordinal = ordinal
  let name = null

  if (isString(descriptor)) {
    name = descriptor
  } else {
    const keys = Object.keys(descriptor)
    assert(keys.length === 1, `For creating the enum ${enumClass.name} you must provide a list of objects in the following format: {constant1: {...}}, {constant2: {...}}, etc.`)
    name = keys[0]
    copyProperties(descriptor[name], instance)
  }

  instance.name = name
  instance._ = instance.toString()
  Object.freeze(instance)
  enumClass[name] = instance
}
