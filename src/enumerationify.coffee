
module.exports = (aClass, constants) ->
  constants.forEach (name, ordinal) ->
    constant = new aClass
    constant.name = name
    constant.ordinal = ordinal
    Object.freeze(constant)
    aClass[name] = constant

  Object.freeze(aClass)
  null

