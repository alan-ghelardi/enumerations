import {AssertionError} from 'assert'
import Enum from '../src/enumerations'

export default class ArithmeticOperation extends Enum {
  
  /* eslint no-unused-vars: "off" */
  apply(a, b) {
    throw new AssertionError('Not implemented yet')
  }

  toString() {
    return this.operator
  }
}

ArithmeticOperation.values({
  SUM: {

    operator: '+',

    apply: (a, b) => a + b
  }
}, {
  SUBTRACTION: {

    operator: '-',

    apply: (a, b) => a - b
  }
}, {
  MULTIPLICATION: {

    operator: '*',

    apply: (a, b) => a * b
  }
}, {
  DIVISION: {

    operator: '/',

    apply: (a, b) => a / b
  }
})

