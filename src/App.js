import { getChildProperties } from './UtilsFile';

describe('getChildProperties', () => {
  it('should return an empty array for non-object input', () => {
    const nonObjectInput = 'not an object';

    const result = getChildProperties(nonObjectInput);

    expect(result).toEqual([]);
  });

  it('should return an empty array for null input', () => {
    const nullInput = null;

    const result = getChildProperties(nullInput);

    expect(result).toEqual([]);
  });

  it('should return an array of property paths with nested properties', () => {
    const input = {
      properties: {
        prop1: {
          type: 'string',
        },
        nested: {
          type: 'object',
          properties: {
            prop2: {
              type: 'number',
            },
          },
        },
      },
    };

    const result = getChildProperties(input);

    expect(result).toEqual(['prop1', 'nested.prop2']);
  });

  it('should return an array of property paths without nested properties', () => {
    const input = {
      prop1: {
        type: 'string',
      },
      prop2: {
        type: 'number',
      },
    };

    const result = getChildProperties(input);

    expect(result).toEqual(['prop1', 'prop2']);
  });

  it('should return an array of property paths with deeply nested properties', () => {
    const input = {
      properties: {
        prop1: {
          type: 'string',
        },
        nested1: {
          type: 'object',
          properties: {
            nested2: {
              type: 'object',
              properties: {
                nested3: {
                  type: 'object',
                  properties: {
                    prop2: {
                      type: 'number',
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    const result = getChildProperties(input);

    expect(result).toEqual(['prop1', 'nested1.nested2.nested3.prop2']);
  });
});
