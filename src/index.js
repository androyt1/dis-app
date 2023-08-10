// helpers.test.js (The test file)

import { updateSteps } from './helpers';

describe('updateSteps function', () => {
  let mockSetSteps;
  
  beforeEach(() => {
    mockSetSteps = jest.fn();
  });

  test('should update steps when status is "SUCESSFUL"', () => {
    updateSteps(mockSetSteps, 'SUCESSFUL');
    
    expect(mockSetSteps).toHaveBeenCalledTimes(1);
    expect(mockSetSteps).toHaveBeenCalledWith(prevState => ({
      ...prevState,
      stepOne: false,
      stepTwo: true,
    }));
  });

  test('should update steps when status is not "SUCESSFUL"', () => {
    updateSteps(mockSetSteps, 'FAILURE');
    
    expect(mockSetSteps).toHaveBeenCalledTimes(1);
    expect(mockSetSteps).toHaveBeenCalledWith(prevState => ({
      ...prevState,
      stepOne: false,
    }));
  });
});
