import { act, renderHook } from '@testing-library/react-hooks';


describe('createUserStates', () => {
  it('returns initial values for all state variables', () => {
    const { result } = renderHook(() => createUserStates());

    expect(result.current.username.value).toBe('');
    expect(result.current.email.value).toBe('');
    expect(result.current.firstName.value).toBe('');
    expect(result.current.lastName.value).toBe('');
    expect(result.current.status.value).toBe('');
    expect(result.current.roles.value).toBe('');
    expect(result.current.users).toEqual([]);
  });

  it('sets a new value for username', () => {
    const { result } = renderHook(() => createUserStates());
    const newUsername = 'john.doe';

    act(() => {
      result.current.setUserName({ value: newUsername });
    });

    expect(result.current.username.value).toBe(newUsername);
  });

 
});
