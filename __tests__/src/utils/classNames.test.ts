import classNames from '@utils/classNames';

describe('classNames', () => {
    it('should return empty string if no arguments are passed', () => {
        expect(classNames()).toBe('');
    });

    it('should return empty string if all arguments are falsy', () => {
        expect(classNames(false, null, undefined, '')).toBe('');
    });

    it('should return the first argument if it is a string', () => {
        expect(classNames('foo')).toBe('foo');
    });

    it('should not return the first argument if it is a falsy value', () => {
        expect(classNames(false && 'bar', 'foo')).toBe('foo');
    });

});
