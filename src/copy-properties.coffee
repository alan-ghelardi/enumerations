
module.exports = (target, properties) ->
  for own key of properties
    target[key] = properties[key]
