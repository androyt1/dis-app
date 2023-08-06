// Sample test file: MyComponent.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mocked automatically by Jest

import MyComponent from './MyComponent'; // Replace with the actual import path of your component

jest.mock('axios'); // Mock axios to prevent actual API calls

test('renders API response data in the table on page load', async () => {
  const mockedApiResponse = {
    data: [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
    ],
  };

  axios.get.mockResolvedValue(mockedApiResponse);

  const { getByText } = render(<MyComponent />);

  // Check if the table contains the expected data after API response
  await waitFor(() => {
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });
});

test('updates the table on text input', async () => {
  const mockedApiResponse = {
    data: [
      { id: 3, name: 'Item 3', price: 30 },
    ],
  };

  axios.get.mockResolvedValue(mockedApiResponse);

  const { getByLabelText, getByText } = render(<MyComponent />);

  // Simulate user input in the text box
  const input = getByLabelText('Search');
  fireEvent.change(input, { target: { value: 'search query' } });

  // Check if the table contains the updated data after API response
  await waitFor(() => {
    expect(getByText('Item 3')).toBeInTheDocument();
  });
});
