const getObjectValue = (obj, path) => {
  const keys = path.split('.'); // Split the path into an array of property keys

  // Recursive function to traverse the object using the property keys
  const getValue = (currentObj, currentKeys) => {
    // Base case: If there are no more keys, return the value
    if (currentKeys.length === 0) {
      return currentObj;
    }

    const key = currentKeys[0]; // Get the next property key
    const nextObj = currentObj[key]; // Access the property in the current object

    // If the next object is undefined, return undefined
    if (nextObj === undefined) {
      return undefined;
    }

    // Recursively call the function with the next object and remaining keys
    return getValue(nextObj, currentKeys.slice(1));
  };

  return getValue(obj, keys);
};


