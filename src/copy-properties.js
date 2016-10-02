
const finalProperties = new Set([ '_', 'name', 'ordinal', 'type' ])

export default (source, target) => {
  const finalDescriptors = overridablePropertiesOf(source).reduce((descriptors, key) => {
    descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
    return descriptors
  }, {})
  Object.defineProperties(target, finalDescriptors)
}

const overridablePropertiesOf = (source) => Object.keys(source)
.filter(key => !finalProperties.has(key))
