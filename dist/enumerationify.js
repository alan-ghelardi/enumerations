var addNewConstantTo, assert, copyFields, isString, nonOverridableFields,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

assert = require('assert');

isString = require('util').isString;

nonOverridableFields = ['_', 'name', 'ordinal', 'type'];

module.exports = function(enumClass, constants) {
  constants.forEach(function(descriptor, ordinal) {
    return addNewConstantTo(enumClass, descriptor, ordinal);
  });
  Object.freeze(enumClass);
  return null;
};

addNewConstantTo = function(enumClass, descriptor, ordinal) {
  var instance, keys, name;
  instance = new enumClass();
  instance.ordinal = ordinal;
  name = null;
  if (isString(descriptor)) {
    name = descriptor;
  } else {
    keys = Object.keys(descriptor);
    assert(keys.length === 1, "For creating the enum " + enumClass.name + " you must provide a list of objects in the following format: {constant1: {...}}, {constant2: {...}}, etc.");
    name = keys[0];
    copyFields(instance, descriptor[name]);
  }
  instance.name = name;
  instance._ = (instance != null ? instance.toString() : void 0) || instance.name;
  Object.freeze(instance);
  return enumClass[name] = instance;
};

copyFields = function(target, fields) {
  var key, results, value;
  results = [];
  for (key in fields) {
    value = fields[key];
    if (indexOf.call(nonOverridableFields, key) < 0) {
      results.push(target[key] = value);
    }
  }
  return results;
};

//# sourceMappingURL=../.sourcemap/enumerationify.js.map
