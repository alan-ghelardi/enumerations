/*!
 * enumerations
 * Copyright(c) 2016 Alan Ghelardi
 * MIT Licensed
 */

import checkEnumDeclaration from './check-enum-declaration'

export default (enumClass, constants) => {
  constants.forEach((enumDeclaration, ordinal) => {
    addNewConstantTo(enumClass, enumDeclaration, ordinal)
  })

  Object.freeze(enumClass)
}

const addNewConstantTo = (enumClass, enumDeclaration, ordinal) => {
  checkEnumDeclaration(enumDeclaration)
  let name, constant = {} 

  if (typeof enumDeclaration === 'string') {
    name = enumDeclaration
  } else {
    const keys = Object.keys(enumDeclaration)
    name = keys[0]
    constant = enumDeclaration[name]
  }

  constant.__proto__ = Object.create(enumClass.prototype)   
  constant.name = name
  constant.type = enumClass.name
  constant.ordinal = ordinal
  constant._ = constant.toString()
  Object.freeze(constant)
  enumClass[name] = constant
}
