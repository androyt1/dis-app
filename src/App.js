function getChildProperties(json, prefix = '') {
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
                const nestedPrefix = prefix ? `${prefix}.${childKey}` : childKey;
                traverseObject(childValue.properties, nestedPrefix);
              } else {
                properties.push(`${prefix}${childKey}`);
              }
            }
          }
        } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          const nestedPrefix = prefix ? `${prefix}.${key}` : key;
          traverseObject(value, nestedPrefix);
        }
      }
    }
  }

  traverseObject(json, prefix);

  return properties;
}
