import { getValueFromObject } from './yourUtilsFile'; // Import the function from your file

describe('getValueFromObject', () => {
  it('should return the value for a valid path', () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const path = 'a.b.c';

    const result = getValueFromObject(obj, path);

    expect(result).toBe(123);
  });

  it('should return undefined for an invalid path', () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const path = 'a.x.y';

    const result = getValueFromObject(obj, path);

    expect(result).toBeUndefined();
  });

  it('should return undefined for empty path', () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const path = '';

    const result = getValueFromObject(obj, path);

    expect(result).toBeUndefined();
  });

  it('should return the value for a valid nested path with null values', () => {
    const obj = {
      a: {
        b: {
          c: null,
        },
      },
    };
    const path = 'a.b.c';

    const result = getValueFromObject(obj, path);

    expect(result).toBeNull();
  });

  it('should return undefined for missing property along the path', () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const path = 'a.b.x.y.z';

    const result = getValueFromObject(obj, path);

    expect(result).toBeUndefined();
  });
});
