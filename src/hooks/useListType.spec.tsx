import { act, renderHook } from '@testing-library/react';
import { useListType, ListTypeContextProvider } from './useListType';

describe('useListType Hook', () => {
  it('should able to change list type', () => {
    const { result } = renderHook(useListType, {
      wrapper: ListTypeContextProvider,
    });

    act(() => {
      result.current.setActiveListType('list');
    });
    expect(result.current.activeListType).toEqual('list');

    act(() => {
      result.current.setActiveListType('blocks');
    });
    expect(result.current.activeListType).toEqual('blocks');
  });
});
