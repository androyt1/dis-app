import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header'; // Adjust the path accordingly

describe('Header component', () => {
  test('renders correctly with "Hello" title', () => {
    const { getByText } = render(<Header title="Hello" />);

    expect(getByText('Hello')).toBeInTheDocument();
  });

  test('renders correctly with "Greetings" title', () => {
    const { getByText } = render(<Header title="Greetings" />);

    expect(getByText('Greetings')).toBeInTheDocument();
  });

  test('renders correctly with "Test Header" title', () => {
    const { getByText } = render(<Header title="Test Header" />);

    expect(getByText('Test Header')).toBeInTheDocument();
  });
});
