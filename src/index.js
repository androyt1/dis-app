import { updateSteps } from './updateSteps'; // Adjust the path accordingly

describe('updateSteps function', () => {
  test('updates steps for SUCCESSFUL status', () => {
    const setStepsMock = jest.fn();
    const prevSteps = { stepOne: true, stepTwo: false };
    updateSteps(setStepsMock, 'SUCCESSFUL');

    expect(setStepsMock).toHaveBeenCalledWith({
      ...prevSteps,
      stepOne: false,
      stepTwo: true,
    });
  });

  test('updates steps for status other than SUCCESSFUL', () => {
    const setStepsMock = jest.fn();
    const prevSteps = { stepOne: true, stepTwo: true };
    updateSteps(setStepsMock, 'FAILURE');

    expect(setStepsMock).toHaveBeenCalledWith({
      ...prevSteps,
      stepOne: false,
    });
  });

  test('does not update steps if status is unknown', () => {
    const setStepsMock = jest.fn();
    const prevSteps = { stepOne: true, stepTwo: true };
    updateSteps(setStepsMock, 'UNKNOWN_STATUS');

    expect(setStepsMock).not.toHaveBeenCalled();
  });
});
