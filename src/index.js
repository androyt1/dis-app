import { act, renderHook } from '@testing-library/react-hooks';
import { createUserStates } from './your-module-path';

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

  it('updates users array when setUsers is called', () => {
    const { result } = renderHook(() => createUserStates());
    const newUsers = [{ id: 1, name: 'John' }];

    act(() => {
      result.current.setUsers(newUsers);
    });

    expect(result.current.users).toEqual(newUsers);
  });

  it('returns status options', () => {
    const { result } = renderHook(() => createUserStates());

    expect(result.current.status.statusOptions).toEqual([
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
    ]);
  });

  it('returns role options', () => {
    const { result } = renderHook(() => createUserStates());

    expect(result.current.roles.roleOptions).toEqual([
      // List of role options
      // ...
    ]);
  });
});
