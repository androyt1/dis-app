function getChildProperties(json) {
  const properties = [];

  function traverseObject(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (key === 'properties' && typeof value === 'object') {
          for (const propKey in value) {
            if (value.hasOwnProperty(propKey)) {
              properties.push(propKey);
            }
          }
        } else if (typeof value === 'object') {
          traverseObject(value);
        }
      }
    }
  }

  traverseObject(json);

  return properties;
}
