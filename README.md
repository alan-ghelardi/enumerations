# Enumerations

A CoffeeScript implementation of the enumeration design pattern because... well, because developing your own implementation of the enumeration design pattern in CoffeeScript is very funny.

This lightweight library takes the Java implementation of enums as an inspiration for leveraging fully functional enumerations, with support for customized properties and methods, immutability, error checking, etc.

## Installation

```shell
npm install enumerations
```

## Usage

### A Basic Enum

After creating a class that extends from the Enum base class and calling the method `#values(constants...)`, your enumeration is created with the provided constant values. Such as in the Java programing language, each constant is an instance of the enum class.

Furthermore, each constant value, as well the own enum class, become immutable; is no longer possible adding, modifying or removing properties.

```coffeescript
Enum = require 'enumerations'

class PrimaryCollor extends Enum

PrimaryColor.values 'BLUE', 'RED', 'YELLOW'

# Iterates and prints each constant in the order that they were declared
# The order is determined by the method compareTo(other) inherited from the base enum class
# By default, the comparison relies on the ordinal property that each constant has (more about it bellow)
console.log(constant) for constant in PrimaryColor.all() 

{BLUE, RED, YELLOW} = PrimaryColor

Object.isFrozen(PrimaryColor) # true

Object.isFrozen(BLUE) # true

BLUE.name # "BLUE"

BLUE.ordinal # 0

RED.ordinal # 1

YELLOW.ordinal # 2

RED.type # "PrimaryColor"

YELLOW.toString() # "YELLOW" - by default, same as name

BLUE.isConstantOf(PrimaryColor) # true

RED.isSameTypeAs(YELLOW) # true
```

##Examples

Check out the `examples/`folder for more details. The `calculator.coffee` file demonstrates a simple use case of the enumeration strategy pattern implemented through the `arithmetic-operation.coffee` file. Additionally, take a look on the unit tests at `test/` folder. They contain very clear (hopefully) examples of the capabilities of this library.

## License

Copyright (c) 2016 Alan Ghelardi.

Licensed under the MIT license.
