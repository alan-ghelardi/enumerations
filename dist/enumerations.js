var Enum, assert, enumerationify, isArray, isString, ref,
  slice = [].slice;

assert = require('assert');

ref = require('util'), isArray = ref.isArray, isString = ref.isString;

enumerationify = require('./enumerationify');

module.exports = Enum = (function() {
  function Enum() {
    this.type = this.constructor.name;
    assert(!Object.isFrozen(this.constructor), "Cannot instantiate the enum " + this.type);
  }

  Enum.prototype.isConstantOf = function(anEnum) {
    return this.type === anEnum.name;
  };

  Enum.prototype.isSameTypeAs = function(that) {
    return this.type === that.type;
  };

  Enum.prototype.compareTo = function(that) {
    if (!this.isSameTypeAs(that)) {
      throw new Error("Cannot compare two incompatible instances: " + this.type + " and " + that.type);
    }
    if (this.ordinal > that.ordinal) {
      return 1;
    } else if (this.ordinal === that.ordinal) {
      return 0;
    } else {
      return -1;
    }
  };

  Enum.prototype.toString = function() {
    return this.name;
  };

  Enum.values = function() {
    var constants;
    constants = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    assert(!Object.isFrozen(this), "The constants of enum " + this.name + " has already been created ");
    assert(constants.length, "The parameter `name` is required for creating the enum " + this.name);
    enumerationify(this, constants);
    return null;
  };

  Enum.valueOf = function(name) {
    var key, result, value;
    assert(isString(name), 'Parameter `name` must be a string');
    result = (function() {
      var results;
      results = [];
      for (key in this) {
        value = this[key];
        if (value._ === name) {
          results.push(value);
        }
      }
      return results;
    }).call(this);
    assert(result.length, "No such constant `" + name + "`");
    return result[0];
  };

  Enum.all = function() {
    var constants, key, value;
    constants = (function() {
      var results;
      results = [];
      for (key in this) {
        value = this[key];
        if ((value.isConstantOf != null) && value.isConstantOf(this)) {
          results.push(value);
        }
      }
      return results;
    }).call(this);
    return constants.sort(function(a, b) {
      return a.compareTo(b);
    });
  };

  return Enum;

})();

//# sourceMappingURL=../.sourcemap/enumerations.js.map
