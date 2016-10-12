import assert from 'assert'
import {isString} from 'util'

export default (enumClass, constants) => {
  constants.forEach((enumBody, ordinal) => {
    addNewConstantTo(enumClass, enumBody, ordinal)
  })

  Object.freeze(enumClass)
}

const addNewConstantTo = (enumClass, enumBody, ordinal) => {
  let name, constant = {} 

  if (isString(enumBody)) {
    name = enumBody
  } else {
    const keys = Object.keys(enumBody)
    assert(keys.length === 1, `For creating the enum ${enumClass.name} you must provide a list of objects in the following format: {constant1: {...}}, {constant2: {...}}, etc.`)
    name = keys[0]
    constant = enumBody[name]
  }

  constant.__proto__ = Object.create(enumClass.prototype)   
  constant.name = name
  constant.type = enumClass.name
  constant.ordinal = ordinal
  constant._ = constant.toString()
  Object.freeze(constant)
  enumClass[name] = constant
}
