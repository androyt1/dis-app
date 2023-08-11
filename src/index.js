import { useNavigate } from './useNavigate'; 
// Mock the window.location.assign method
delete window.location;
window.location = { assign: jest.fn() };

describe('useNavigate function', () => {
  afterEach(() => {
    window.location.assign.mockClear();
  });

  test('navigates to the specified URL', () => {
    const navigate = useNavigate();
    navigate('/new-page');

    expect(window.location.assign).toHaveBeenCalledWith('/new-page');
  });

  test('navigates to a different URL', () => {
    const navigate = useNavigate();
    navigate('/other-page');

    expect(window.location.assign).toHaveBeenCalledWith('/other-page');
  });

  test('navigates to a URL with query parameters', () => {
    const navigate = useNavigate();
    navigate('/search?query=term');

    expect(window.location.assign).toHaveBeenCalledWith('/search?query=term');
  });
});
