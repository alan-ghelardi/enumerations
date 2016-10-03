inquirer = require 'inquirer'
ArithmeticOperation = require './arithmetic-operation'

console.log('***Calculator Example***')

console.log('This example demonstrates the enumeration strategy pattern implemented with this library')

checkNumber = (n) ->
  number = /^\d+(\.\d+)?$/
  if number.test(n) then true else 'Please, enter a number'

convertToNumber = (n) -> new Number(n)

choiceList = ->
  ArithmeticOperation.all()
  .map (operation) -> operation._

inquirer.prompt [ {
    type: 'input'
    name: 'x'
    message: 'Enter the first number'
    validate: checkNumber
    filter: convertToNumber
  }, {
    type: 'input'
    name: 'y'
    message: 'Enter the second number'
    validate: checkNumber
    filter: convertToNumber
  }, {
    type: 'list'
    name: 'operation'
    message: 'Choose the operation'
    choices: choiceList
  }]
.then (answers) ->
  {x, y, operation} = answers

  result = ArithmeticOperation.valueOf(operation).apply(x, y)

  console.log('***Result***')
  console.log('%d %s %d = %d', x, operation, y, result)
