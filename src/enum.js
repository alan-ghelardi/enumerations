/*!
 * enumerations
 * Copyright(c) 2016 Alan Ghelardi
 * MIT Licensed
 */

import assert from 'assert'
import makeEnum from './make-enum'

/**
 * This is the common base class for all enumeration types. Enum constants are
 * immutable; once declared they can't be modified.
 * 
 * Enum types are iterable, that's to say, they inherit a [Symbol.iterator]
 * method implemented by this class. Therefore, enum types may be used in "for
 * of" blocks in order to iterate over its declared constants.
 * 
 * @property {string} name - The name of the enum constant, exactly as declared
 *           in the enum declaration.
 * @property {number} ordinal - An integer indicating the ordinal of this
 *           enumeration constant (its position in its enum declaration, where
 *           the initial constant is assigned a value of zero).
 * @property {string} type A string representing the type of this constant
 *           (actually, the name of the class that this constant extends from).
 * @property {string} _ An alias to {@link Enum.toString}. This property offers
 *           a short and convenient way of obtaining the string representation
 *           of this constant.
 */
class Enum {

  /**
   * Enum types may not be instantiated through the new operator. The
   * constructor guarantees such invariant by throwing an AssertionError
   * whenever called.
   * 
   * @throws {AssertionError}
   *           Whenever that one uses the new operator with an enum type.
   */
  constructor() {
    const type = this.constructor.name
    assert.fail(`The type ${type} may not be instantiated`)
  }

  /**
   * Returns true whether this enum constant bellongs to the specified enum
   * class or false otherwise.
   * 
   * @param {Enum}
   *          anEnum Any enum class.
   * @returns {boolean} True or false indicating waht is explained above.
   */
  isConstantOf(anEnum) {
    return this.type === anEnum.name
  }

  /**
   * Returns true whether this constant bellongs to the same enum class of the
   * specified constant or false otherwise.
   * 
   * @param {Enum}
   *          that Any enum constant.
   * @returns {boolean} True or false indicating what is explained above.
   */
  isSameTypeAs(that) {
    return this.type === that.type
  }

  /**
   * Compares this enum constant with the specified object for order (by using
   * the ordinal property). Returns a negative integer, 0 or a positive integer
   * if this enum constant is less than, equal to or greather than the specified
   * parameter. Enum constants are only comparable to other enum constants of
   * the same type. If a enum constant of a different type or even an arbitrary
   * object is passed as a parameter, an error is thrown.
   * 
   * @param {Enum}
   *          that An enum constant of the same type of this enum constant.
   * @returns {number} A negative integer, zero or a positive integer following
   *          the algorithm cited above.
   * @throws {Error}
   *           If the preconditions mentioned above aren't satisfied.
   */
  compareTo(that) {
    if (! this.isSameTypeAs(that)) {
      throw new Error(`Cannot compare two incompatible instances: ${this.type} and ${that.type}`)
    }

    return this.ordinal > that.ordinal ? 1 :
    this.ordinal === that.ordinal ? 0 : 1 
  }

  /**
   * Returns a string representing this enum constant. By default, this method
   * returns the name of this constant (same as the property name). However,
   * this method may be overriden in order to provide a more friendly string
   * form of the enum constant.
   * 
   * @returns {string} String representation of this constant.
   */
  toString() {
    return this.name
  }

  /**
   * Initializes this enum type, by creating the specified constant values. Each
   * constant will inherit the prototype of this enum and will be added as
   * immutable properties of the current enum subclass. Enum constants are
   * immutable and and may not be configured. Further more, as a side efect of
   * calling this method, the own enum become immutable and will no longer be
   * possible to modify it.
   * 
   * Notice that isn't possible to call this method directly in the class Enum.
   * Rather, it's necessary to create a subclass of Enum, which will act as the
   * base for the new enum type. In addition, this method must be invoked once;
   * any attempt of calling it on an initialized enum typ will result in an
   * AssertionError.
   * 
   * For more details about how to use this method, check out the
   * {@link https://github.com/alan-ghelardi/enumerations/tree/master/examples examples}.
   * 
   * @param {string|object}
   *          constants Rest parameters representing the enum declarations. If a
   *          string is specified it will be the name of the constant. If the
   *          enum declaration is an object, it must respect the following form:
   *          ```js {name: {property1: value1, property2: value2, propertyN:
   *          valueN}} ``` In other words, each enum declaration must be a plain
   *          object with one and only one property (that will be the enum
   *          constant's name) and a set of members (attributes and/or methods)
   *          assigned to this property. Any violation to these invariants will
   *          cause an AssertionError.
   * @throws {AssertionError}
   *           If the invariants mentioned previously aren't respected.
   */
  static values(...constants) {
    assert(this.name !== 'Enum', 'The method .values() must be used only in subclasses of Enum')
    assert(!Object.isFrozen(this), `The constants of enum ${this.name} have already been created`)
    assert(constants.length, `The parameter \`constants\` is mandatory for creating the enum ${this.name}`)
    makeEnum(this, constants)
  }

  /**
   * Returns the enum constant whose the result of an invokation of the method
   * {@link Enum.toString} matches the provided parameter name. The name must
   * match exactly the return value of {@link Enum.toString}; extraneous
   * whitespaces are not permitted.
   * 
   * @returns {Enum} The enum constant whose #toString() matches the specified
   *          name.
   * @throws {AssertionError}
   *           If the provided name is not a string or if there is no an enum
   *           constant that corresponds to the specified name.
   */
  static valueOf(name) {
    assert(typeof name === 'string', 'Parameter `name` must be a string')

    for (let constant of this) {
      if (constant._ === name) {
        return constant
      }
    }

    assert.fail(`No such constant \`${name}\``)
  }

  /**
   * Returns an array containing all declared constants of this enum type.
   * 
   * @return {array} Array with all constants that bellong to this enum.
   */
  static all() {
    const constants = []
    
    for (let constant of this) {
      constants.push(constant)
    }

    return constants
  }
  
  /**
   * Makes this enum class iterable by returning a generator.
   * 
   * @returns {object} A object that implements the Generator interface.
   */
  static *[Symbol.iterator]() {
    for (let key in this) {
      if (this[key].isConstantOf && this[key].isConstantOf(this)) {
        yield this[key]
      }
    }
  } 

}

export default Enum
