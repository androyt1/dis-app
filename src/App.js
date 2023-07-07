
function getChildProperties(json) {
  const properties = [];

  function traverseObject(obj, prefix = '') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (key === 'properties') {
          for (const childKey in value) {
            if (value.hasOwnProperty(childKey)) {
              const childValue = value[childKey];
              if (childValue.hasOwnProperty('properties')) {
                traverseObject(childValue.properties, prefix + childKey + '.');
              } else {
                properties.push(prefix + childKey);
              }
            }
          }
        } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          traverseObject(value, prefix + key + '.');
        }
      }
    }
  }

  traverseObject(json);

  return properties;
}
