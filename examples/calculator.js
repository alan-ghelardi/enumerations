/* eslint no-console: "off" */
require('babel-register')
const inquirer = require('inquirer')
const {default: ArithmeticOperation} = require('./arithmetic-operation')

console.log('***Calculator Example***')

console.log('This example demonstrates the enumeration strategy pattern implemented with this library')

const checkNumber = (n) => {
  const number = /^\d+(\.\d+)?$/
  return number.test(n) ? true : 'Please, enter a number'
}

const convertToNumber = (n) => new Number(n)

const choiceList = () => {
  return ArithmeticOperation.all()
  .map( operation => operation._)
  
}

inquirer.prompt( [ {
  type: 'input',
  name: 'x',
  message: 'Enter the first number',
  validate: checkNumber,
  filter: convertToNumber,
}, {
  type: 'input',
  name: 'y',
  message: 'Enter the second number',
  validate: checkNumber,
  filter: convertToNumber,
}, {
  type: 'list',
  name: 'operation',
  message: 'Choose the operation',
  choices: choiceList
}])
.then( answers => {
  const {x, y, operation} = answers

  const result = ArithmeticOperation.valueOf(operation).apply(x, y)

  console.log('***Result***')
  console.log('%d %s %d = %d', x, operation, y, result)
})
