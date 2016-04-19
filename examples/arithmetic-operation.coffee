{AssertionError} = require 'assert'
Enum = require '../src/enumeration'

module.exports =
class ArithmeticOperation extends Enum

  apply: (a, b) -> throw new AssertionError('Not implemented yet')

  toString: -> @operator

ArithmeticOperation.values {
  SUM:

    operator: '+'

    apply: (a, b) -> a + b
}, {
  SUBTRACTION:

    operator: '-'

    apply: (a, b) -> a - b
}, {
  MULTIPLICATION:

    operator: '*'

    apply: (a, b) -> a * b
}, {
  DIVISION:

    operator: '/',

    apply: (a, b) -> a / b
}

