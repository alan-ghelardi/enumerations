# Enumerations

A JavaScript implementation of the Type-Safe Enumeration Design Pattern.

This lightweight library takes the Java implementation of enums as an inspiration for leveraging fully functional enumerations, with support for customized properties and methods, immutability, error checking, etc.

## Installation

```shell
npm install enumerations
```

## Requirements

NodeJS 6 or higher.

## Usage

### A Basic Enum

After creating a class that extends from the Enum base class and calling the method `#values(...constants)`, your enumeration is created with the provided constant values. Such as in the Java programing language, each constant is an instance of the enum class.

Furthermore, each constant value, as well the own enum class, become immutable; is no longer possible adding, modifying or removing properties.

```js
import Enum from 'enumerations'

class PrimaryCollor extends Enum {
}

PrimaryColor.values('BLUE', 'RED', 'YELLOW')

```

### A More Advanced Example

It's possible to implement the strategy design pattern through enums. Let's have a look on a very simple example where the four basic arithmetic operations are modelled as enum constants, each one with its own implementation of a method apply which takes two numbers as parameters:  

```js
import {AssertionError} from 'assert'
import Enum from 'enumerations'

class ArithmeticOperation extends Enum {
  
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

const x = 6
const y = 2

for (let operation of ArithmeticOperation) {
  console.log('%d %s %d = %d', x, operation.operator, y, operation.apply(x, y))
}
```

### Overriding a method and calling the super

Let's imagine a scenario where in a sales system, each employee of a sales chain receives a commission of 20% over each sold product. However, for sales supervisors the company offers an additional bonus of $50.00 over the regular commission. This model can be designed in the following way: 

```js
import Enum from 'enumerations'

export default class EmployeeType extends Enum {
  computeCommission(amount) {
    return amount * 0.20
  }
}

EmployeeType.values({
  SALES_SUPERVISOR: {
    computeCommission(amount) {
      return super.computeCommission(amount) + 50.00
    }
  }
},

'SHOP_ASSISTANT',

'SALES_PERSON')
```

##Examples

Check out the `examples/`folder for more details. Additionally, take a look on the unit tests at `test/` folder. They contain very  comprhensive examples of the capabilities of this library.

## License

Copyright (c) 2016 Alan Ghelardi.

Licensed under the MIT license.
