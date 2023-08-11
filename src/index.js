import { useNavigate } from './useNavigate'; // Adjust the path accordingly

describe('useNavigate function', () => {
  test('navigates to the specified URL', () => {
    const originalLocation = window.location;
    const mockLocation = { assign: jest.fn() };
    delete window.location;
    window.location = mockLocation;

    const navigate = useNavigate();
    navigate('/new-page');

    expect(mockLocation.assign).toHaveBeenCalledWith('/new-page');

    // Restore original location
    window.location = originalLocation;
  });

  test('navigates to a different URL', () => {
    const originalLocation = window.location;
    const mockLocation = { assign: jest.fn() };
    delete window.location;
    window.location = mockLocation;

    const navigate = useNavigate();
    navigate('/other-page');

    expect(mockLocation.assign).toHaveBeenCalledWith('/other-page');

    // Restore original location
    window.location = originalLocation;
  });

  test('navigates to a URL with query parameters', () => {
    const originalLocation = window.location;
    const mockLocation = { assign: jest.fn() };
    delete window.location;
    window.location = mockLocation;

    const navigate = useNavigate();
    navigate('/search', { query: 'term' });

    expect(mockLocation.assign).toHaveBeenCalledWith('/search?query=term');

    // Restore original location
    window.location = originalLocation;
  });
});
