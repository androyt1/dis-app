function getAllValues(jsonObj) {
  let values = [];

  function traverse(obj) {
    if (typeof obj === "object" && obj !== null) {
      if (Array.isArray(obj)) {
        obj.forEach(item => {
          traverse(item);
        });
      } else {
        Object.values(obj).forEach(value => {
          values.push(value);
          traverse(value);
        });
      }
    }
  }

  traverse(jsonObj);
  return values;
}
