function getNestedPropertiesNames(obj) {
    let propertyNames = [];
  
    function traverse(obj, path = '') {
      if (typeof obj !== 'object' || obj === null) {
        return;
      }
  
      if ('properties' in obj) {
        for (let key in obj.properties) {
          if (typeof obj.properties[key] === 'object' && obj.properties[key] !== null) {
            let newPath = path ? `${path}.${key}` : key;
            if (key !== 'nested') {
              propertyNames.push(newPath);
            }
            traverse(obj.properties[key], newPath);
          }
        }
      } else {
        for (let key in obj) {
          let newPath = path ? `${path}.${key}` : key;
          traverse(obj[key], newPath);
        }
      }
    }
  
    traverse(obj);
    return propertyNames;
  }
