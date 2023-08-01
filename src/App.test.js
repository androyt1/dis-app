import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, screen } from '@testing-library/react';
import App from '../App';
// Create a new instance of the mock adapter
const mock = new MockAdapter(axios);

describe('App', () => {
    beforeEach(() => {
      // Clear any previous mock responses before each test
      mock.reset();
    });
  
    it('should display user data', async () => {
      // Mock a successful response for a GET request to a specific URL
      mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
      ]);
  
      // Render the component
      render(<App />);
  
      // Your assertions based on the mock response
      expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
      expect(await screen.findByText('Sincere@april.biz')).toBeInTheDocument();
    });
  
    it('should handle error from the API', async () => {
      // Mock an error response for a GET request to a specific URL
      mock.onGet('https://jsonplaceholder.typicode.com/users').reply(404, {
        error: 'Internal Server Error',
      });
  
      // Render the component
      render(<App />);
  
      // Your assertions based on the mock error response
      expect(await screen.findByText('Error: Internal Server Error')).toBeInTheDocument();
    });
  });
