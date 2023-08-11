import React from 'react';
import { render, act } from '@testing-library/react';
import { SuccessPage } from './SuccessPage'; 

jest.useFakeTimers(); // Mock the timers

describe('SuccessPage component', () => {
  test('renders correctly with success message and navigates after delay', () => {
    const mockNavigate = jest.fn();
    const props = {
      url: '/new-page',
      message: 'Success!',
    };

    // Mock the useNavigate hook
    jest.mock('./useNavigate', () => () => mockNavigate);

    render(<SuccessPage {...props} />);

    expect(mockNavigate).not.toHaveBeenCalled();

    // Advance timers by 3000ms
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/new-page');
  });

  test('renders correctly with custom message and navigates after delay', () => {
    const mockNavigate = jest.fn();
    const props = {
      url: '/custom-page',
      message: 'Custom Message',
    };

    // Mock the useNavigate hook
    jest.mock('./useNavigate', () => () => mockNavigate);

    render(<SuccessPage {...props} />);

    expect(mockNavigate).not.toHaveBeenCalled();

    // Advance timers by 3000ms
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/custom-page');
  });

  test('renders correctly with another message and navigates after delay', () => {
    const mockNavigate = jest.fn();
    const props = {
      url: '/another-page',
      message: 'Another Message',
    };

    // Mock the useNavigate hook
    jest.mock('./useNavigate', () => () => mockNavigate);

    render(<SuccessPage {...props} />);

    expect(mockNavigate).not.toHaveBeenCalled();

    // Advance timers by 3000ms
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/another-page');
  });
});
