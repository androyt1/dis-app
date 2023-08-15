import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomDatePicker from './CustomDatePicker'

describe('CustomDatePicker', () => {
  it('renders without crashing', () => {
    render(<CustomPopover />);
  });

  it('handles date changes on chip click', () => {
    const handleDatesMock = jest.fn();
    const dates = {
      start: null,
      end: null,
    };
    const { getByText } = render(<CustomPopover handleDates={handleDatesMock} dates={dates} />);

    const thisWeekChip = getByText('This week');
    fireEvent.click(thisWeekChip);

    expect(handleDatesMock).toHaveBeenCalledTimes(1);
    expect(handleDatesMock).toHaveBeenCalledWith(expect.any(Date), expect.any(Date));
  });

  it('handles reset on refresh icon click', () => {
    const resetDate = true;
    const handleDatesMock = jest.fn();
    const dates = {
      start: null,
      end: null,
    };
    const { getByLabelText } = render(<CustomPopover handleDates={handleDatesMock} resetDate={resetDate} dates={dates} />);

    const refreshIcon = getByLabelText('refresh');
    fireEvent.click(refreshIcon);

    expect(handleDatesMock).toHaveBeenCalledTimes(1);
    expect(handleDatesMock).toHaveBeenCalledWith(null, null);
  });

  it('updates state when "selected" changes', () => {
    const { container, rerender } = render(<CustomPopover />);
    
    const initialSelected = container.querySelector('.mb-5.d-block[aria-selected="true"]');
    expect(initialSelected).toHaveTextContent('This week');

    rerender(<CustomPopover selected="prevWeek" />);
    
    const updatedSelected = container.querySelector('.mb-5.d-block[aria-selected="true"]');
    expect(updatedSelected).toHaveTextContent('Last week');
  });
  
  
});
