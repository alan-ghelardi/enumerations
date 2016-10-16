/*!
 * enumerations
 * Copyright(c) 2016 Alan Ghelardi
 * MIT Licensed
 */

import assert from 'assert'

const finalProperties = new Set(['name', 'type', 'ordinal', '_', 'isConstantOf', 'isSameTypeAs', 'valueOf'])

const objectPrototype = Object.prototype

const illegalEnumDeclaration = `Illegal enum declaration. The enum declaration must be a string or a plain 
object in the following form: 
{name: {property1: value1, property2: value2, propertyN: valueN }}`  

export default (enumDeclaration) => {
  if (typeof enumDeclaration !== 'string' && !isValidObject(enumDeclaration)) {
    assert(false, illegalEnumDeclaration)
  }
}

const isValidObject = (value) => {
  if (!isPlainObject(value)) {
    return false
  }
  
  const keys = Object.keys(value)
  assert(keys.length === 1, illegalEnumDeclaration)
  const enumBody = value[keys[0]]
  assert(isPlainObject(enumBody), illegalEnumDeclaration)
  assertThatIsntTryingToOverrideFinalProperties(enumBody)
  return true
}

const isPlainObject = (value) => {
  return typeof value === 'object' && value !== null && objectPrototype === Object.getPrototypeOf(value) 
}

const assertThatIsntTryingToOverrideFinalProperties = (enumBody) => {
  const keys = Object.keys(enumBody)
  const illegalProperties = keys.filter(key => finalProperties.has(key))
  assert(!illegalProperties.length, `Cannot override final property(ies) ${illegalProperties.join(', ')}`)
}
