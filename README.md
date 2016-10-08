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

##Examples

Check out the `examples/`folder for more details. The `calculator.js` file demonstrates a simple use case of the strategy pattern implemented through the `arithmetic-operation.js` file. Additionally, take a look on the unit tests at `test/` folder. They contain very  comprhensive examples of the capabilities of this library.

## License

Copyright (c) 2016 Alan Ghelardi.

Licensed under the MIT license.
