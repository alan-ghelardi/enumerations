import assert from 'assert'
import enumerationify from './enumerationify'
import {isString} from 'util'

export default class Enum {

  constructor() {
    this.type = this.constructor.name

    assert(!Object.isFrozen(this.constructor), `Cannot instantiate the enum ${this.type}`)
  }

  isConstantOf(anEnum) {
    return this.type === anEnum.name
  }

  isSameTypeAs(that) {
    return this.type === that.type
  }

  compareTo(that) {
    if (! this.isSameTypeAs(that)) {
      throw new Error(`Cannot compare two incompatible instances: ${this.type} and ${that.type}`)
    }

    return this.ordinal > that.ordinal ? 1 :
    this.ordinal === that.ordinal ? 0 : 1 
  }

  toString() {
    return this.name
  }

  static values(...constants) {
    assert(!Object.isFrozen(this), `The constants of enum ${this.name} have already been created`)
    assert(constants.length, `The parameter \`constants\` is required for creating the enum ${this.name}`)
    enumerationify(this, constants)
  }

  static valueOf(name) {
    assert(isString(name), 'Parameter `name` must be a string')

    for (let constant of this) {
      if (constant._ === name) {
        return constant
      }
    }

    assert.fail(`No such constant \`${name}\``)
  }

  static *[Symbol.iterator]() {
    for (let key in this) {
      if (this[key].isConstantOf && this[key].isConstantOf(this)) {
        yield this[key]
      }
    }
  } 

}
