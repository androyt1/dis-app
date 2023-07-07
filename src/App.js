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
              if (childKey === 'properties' && typeof childValue === 'object' && !Array.isArray(childValue)) {
                traverseObject(childValue, prefix);
              } else {
                properties.push(prefix + childKey);
              }
            }
          }
        }
      }
    }
  }

  traverseObject(json);

  return properties;
}
