function getChildProperties(json, prefix = '') {
  const properties = [];

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];

      if (key === 'properties') {
        for (const childKey in value) {
          if (value.hasOwnProperty(childKey)) {
            const childValue = value[childKey];
            if (childValue.hasOwnProperty('properties')) {
              const nestedPrefix = prefix ? `${prefix}.${childKey}` : childKey;
              const nestedProperties = getChildProperties(childValue.properties, nestedPrefix);
              properties.push(...nestedProperties);
            } else {
              properties.push(`${prefix}${childKey}`);
            }
          }
        }
      }
    }
  }

  return properties;
}
