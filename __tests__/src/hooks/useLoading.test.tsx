import useLoading from '@hooks/useLoading';
import { renderHook } from '@testing-library/react-hooks';

describe('useLoading', () => {
    it('should execute callback', () => {
        const mockedCallback = jest.fn();
        renderHook(() => useLoading(mockedCallback));

        expect(mockedCallback).toHaveBeenCalledWith();
    });
});
